import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
import {createDashboard} from './server.mjs';
const server=await createDashboard();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
let browser;
try{
 browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1050}}),errors=[];page.on('pageerror',error=>errors.push(error.message));
 await page.goto('http://127.0.0.1:'+server.address().port);
 await page.getByRole('heading',{name:'Od scenariusza do potwierdzonego wyniku.'}).waitFor();
 await mkdir('.cms',{recursive:true});await page.screenshot({path:'.cms/preview.png',fullPage:true});
 await page.getByRole('link',{name:/Katalog testów/}).click();await page.getByRole('searchbox',{name:'Szukaj scenariusza'}).fill('newCustomers');
 assert.equal(await page.locator('[data-test]').count(),1);await page.locator('[data-test]').check();
 await page.getByLabel('Przeglądarka',{exact:true}).selectOption('firefox');
 await page.getByLabel('Sprawdź także obrazy i zasoby',{exact:true}).check();
 assert.equal(await page.getByLabel('Sprawdź także obrazy i zasoby',{exact:true}).isChecked(),true);
 await page.getByRole('link',{name:/Konfiguracja/}).click();await page.getByRole('heading',{name:'Dane logowania'}).waitFor();
 await page.getByRole('link',{name:/Historia uruchomień/}).click();await page.getByRole('heading',{name:'Historia uruchomień',exact:true}).waitFor();
 await page.setViewportSize({width:390,height:844});await page.getByRole('link',{name:/Katalog testów/}).click();
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.screenshot({path:'.cms/preview-mobile.png',fullPage:true});assert.deepEqual(errors,[]);
 console.log('UI OK: desktop, mobile, wyszukiwanie, wybór testu i przeglądarki, konfiguracja, historia; bez uruchamiania testów CMS.');
}finally{await browser?.close();await new Promise(resolve=>server.close(resolve));}
