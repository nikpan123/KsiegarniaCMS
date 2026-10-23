import test from 'node:test';
import assert from 'node:assert/strict';
import diagnostic from './test-data-diagnostic.cjs';
const {classifyTestDataError: classify} = diagnostic;
test('existing documents, occupied carts and legacy preparation errors have a clear cause',()=>{
 for(const message of ['[EXISTING_TEST_DATA] Szkoła 94941 ma zamówienie 1022511.', 'Konto ma już koszyk. Nie dodano QA i nie zmieniono istniejących pozycji.', 'Error: Pozostałości poprzedniego przebiegu wymagają wyjaśnienia\nexpect(received).toEqual(expected)']) assert.equal(classify(message).category,'EXISTING_TEST_DATA');
 assert.match(classify('[EXISTING_TEST_DATA] Szkoła 94941 ma zamówienie 1022511.').summary,/94941.*1022511/);
});
test('pending restoration and missing data are separate preparation errors',()=>{
 assert.equal(classify('Istnieje dziennik promocji #36944 — najpierw przywróć konfigurację.').category,'TEST_DATA_CONFLICT');
 assert.equal(classify('[TEST_DATA_ERROR] Brak produktu wzorcowego.').category,'TEST_DATA_ERROR');
 assert.match(classify('Istnieje dziennik stock. Najpierw descriptions:stock:restore.').suggestion,/nie usuwaj dziennika/);
});
test('application failures and negative validation cases are never reclassified by vague keywords',()=>{
 for(const message of ['HTTP 500: duplicate key already exists','Brak produktu po zapisaniu','Expected 8 Received 7','Pusty koszyk nie pozwala finalizować','Konto już istnieje','Brak danych w odpowiedzi API','Produkt zmieniony poza testem — dziennik zachowany','']) assert.equal(classify(message),null,message);
});

import {createRequire} from 'node:module';
const Reporter=createRequire(import.meta.url)('./reporter.cjs');
test('CMS reporter preserves FAIL and adds data diagnostics',()=>{
 const chunks=[];const write=process.stdout.write;process.stdout.write=(chunk)=>{chunks.push(String(chunk));return true;};
 try {new Reporter().onTestEnd({title:'Preparation',location:{file:'fake.spec.ts'},annotations:[]},{status:'failed',duration:1,retry:0,errors:[{message:'[EXISTING_TEST_DATA] Existing test documents.'}]});} finally {process.stdout.write=write;}
 const event=JSON.parse(chunks.join('').trim().replace(/^CMS_EVENT:/,''));assert.equal(event.status,'failed');assert.equal(event.dataErrors[0].category,'EXISTING_TEST_DATA');
});
