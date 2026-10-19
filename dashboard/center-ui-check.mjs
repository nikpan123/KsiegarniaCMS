import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1050}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 const center=await(await fetch('http://127.0.0.1:4180/api/state')).json();
 const cms=await(await fetch('http://127.0.0.1:4181/api/state')).json();
 assert.deepEqual(center.tests.filter(t=>t.project==='cms').map(t=>t.id).sort(),cms.catalog.map(t=>t.id).sort());
 await page.goto('http://127.0.0.1:4180/#projects');
 const card=page.locator('.project-card').filter({has:page.getByRole('heading',{name:'Księgarnia CMS',exact:true})});
 await card.getByRole('button',{name:/Panel uruchomień/}).click();
 await page.frameLocator('iframe').getByRole('heading',{name:'Od scenariusza do potwierdzonego wyniku.'}).waitFor();
 await page.getByRole('link',{name:/Katalog testów/}).click();await page.getByLabel('Projekt',{exact:true}).selectOption('cms');
 assert.equal(await page.locator('[data-select]').count(),40);
 await page.getByLabel('Szukaj testu').fill('newCustomers');assert.equal(await page.locator('[data-select]').count(),1);
 await page.getByRole('button',{name:'Nowy klient',exact:true}).click();await page.getByRole('dialog').waitFor();
 await page.getByRole('button',{name:'Zamknij',exact:true}).last().click();
 assert.deepEqual(errors,[]);console.log('Integracja UI OK: zgodne '+cms.catalog.length+' scenariuszy, karta projektu, osadzony panel, filtrowanie i szczegóły testu w Centrum. Testy CMS nie zostały uruchomione.');
}finally{await browser.close();}
