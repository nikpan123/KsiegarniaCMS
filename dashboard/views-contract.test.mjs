import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {loadCatalog} from './catalog.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

test('Wzorzec obejmuje wszystkie zapisane pozycje menu i nie utrwala identyfikatorów rekordów',async()=>{
 const baseline=JSON.parse(await readFile(path.join(root,'config/view-baseline.json'),'utf8'));
 assert.equal(new Set(baseline.views.map(v=>v.id)).size,baseline.views.length);
 for(const item of baseline.navigation)assert.ok(baseline.views.some(view=>view.path===item.path),'Brak testu dla menu: '+item.text);
 for(const view of baseline.views){
  if(view.path)assert.ok(!/\/\d+(?:\/|$)/.test(view.path),'Stały identyfikator w ścieżce: '+view.id);
  if(view.lookup){assert.ok(!/\/\d+(?:\/|$)/.test(view.lookup.path));assert.ok(!/\/\d+(?:\/|$)/.test(view.lookup.pattern));for(const step of view.lookup.via||[])assert.ok(!/\/\d+(?:\/|$)/.test(step.pattern));}
  for(const snapshot of [view.base,...view.actions.map(a=>a.snapshot)])for(const field of snapshot.fields)assert.ok(!/\[value=|csrf|_token/i.test(field.selector));
 }
});
test('Każdy wzorzec ma oddzielny test dostępny w katalogu panelu',async()=>{
 const baseline=JSON.parse(await readFile(path.join(root,'config/view-baseline.json'),'utf8'));
 const catalog=(await loadCatalog(root)).filter(t=>t.module==='Widoki po aktualizacji');
 assert.equal(catalog.length,baseline.views.length+1);
 for(const view of baseline.views){
  const file='tests/views-'+view.id+'.spec.ts';assert.ok(catalog.some(t=>t.file===file));
  const source=await readFile(path.join(root,file),'utf8');assert.ok(source.includes(JSON.stringify(view.id)));assert.ok(source.includes("tag:'@views'"));
 }
 assert.ok(catalog.some(t=>t.file==='tests/views-navigation.spec.ts'));
});
