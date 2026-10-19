import {test} from '@playwright/test';
import {assertViewSnapshot} from '../shared/viewSmoke';
test('Ukryty nagłówek innej zakładki nie przesłania widocznego nagłówka',async({page})=>{
 await page.setContent('<main><h3 hidden>Poprzednia zakładka</h3><h3>Aktywna zakładka</h3></main>');
 await assertViewSnapshot(page.locator('main'),{headings:[{tag:'h3'}],tables:[],fields:[],buttons:[],empty:[],links:[]});
});
