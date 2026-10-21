import {test,expect} from '../shared/browser-preview';
import {debuggerStep} from '../shared/debugger-step';
test('Lokalna sesja debuggera CMS',async({page})=>{
 await page.route('**/*',r=>r.fulfill({contentType:'text/html; charset=utf-8',body:'<html><meta charset="utf-8"><h1>CMS lokalny</h1><button onclick="document.querySelector(\'output\').textContent=1">Zmień</button><output>0</output></html>'}));
 await debuggerStep('Otwórz lokalną listę',async()=>{await page.goto('http://local-cms.test/');await expect(page.locator('output')).toHaveText('0');});
 await debuggerStep('Kliknij i sprawdź efekt',async()=>{await page.getByRole('button',{name:'Zmień'}).click();await expect(page.locator('output')).toHaveText('1');});
});
