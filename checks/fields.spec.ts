import {test,expect} from '@playwright/test';
import {assertViewSnapshot} from '../shared/viewSmoke';
const snapshot={headings:[],tables:[],fields:[{tag:'input',type:'text',selector:'[name="code"]',label:'Kod'}],buttons:[],empty:[],links:[]};
test('Kontrola pól odrzuca pole ukryte po zmianie szablonu',async({page})=>{
 await page.setContent('<main><h1>Formularz</h1><input name="code" type="text" hidden></main>');
 await expect(assertViewSnapshot(page.locator('main'),snapshot)).rejects.toThrow('Pole niewidoczne');
});
test('Kontrola pól odrzuca zmianę rodzaju kontrolki',async({page})=>{
 await page.setContent('<main><input name="code" type="checkbox"></main>');
 await expect(assertViewSnapshot(page.locator('main'),snapshot)).rejects.toThrow('Zmieniono typ pola');
});
