import {test,expect} from '@playwright/test';
import {assertViewSnapshot} from '../shared/viewSmoke';
const base={headings:[{tag:'h1',text:'Produkty'}],tables:[{headers:['Kod','Nazwa','Akcje']}],fields:[],buttons:[],empty:[],links:[]};
test('Kontrola akceptuje zmienne dane i dodatkową kolumnę',async({page})=>{
 await page.setContent('<main><h1>Produkty</h1><table><thead><tr><th>Kod</th><th>Nazwa</th><th>Nowa</th><th>Akcje</th></tr></thead><tbody><tr><td>dowolny</td><td>zmienna nazwa</td></tr></tbody></table></main>');
 await assertViewSnapshot(page.locator('main'),base);
});
test('Brak kolumny jest błędem',async({page})=>{
 await page.setContent('<main><h1>Produkty</h1><table><thead><tr><th>Kod</th><th>Nazwa</th></tr></thead></table></main>');
 await expect(assertViewSnapshot(page.locator('main'),base)).rejects.toThrow('Akcje');
});
test('Brak formularza jest błędem',async({page})=>{
 await page.setContent('<main><h1>Produkty</h1></main>');
 await expect(assertViewSnapshot(page.locator('main'),{...base,tables:[],fields:[{tag:'input',type:'text',selector:'[name="code"]',label:'Kod'}]})).rejects.toThrow('Kod');
});
test('Jawny brak wyników jest poprawnym stanem listy',async({page})=>{
 await page.setContent('<main><h1>Produkty</h1><div class="ui message">Nie znaleziono wyników</div></main>');
 await assertViewSnapshot(page.locator('main'),base);
});
test('Pusta strona bez tabeli i bez komunikatu jest błędem',async({page})=>{
 await page.setContent('<main><h1>Produkty</h1></main>');
 await expect(assertViewSnapshot(page.locator('main'),base)).rejects.toThrow('tabele');
});
