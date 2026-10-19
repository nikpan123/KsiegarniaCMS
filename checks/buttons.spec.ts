import {test} from '@playwright/test';
import {assertViewSnapshot} from '../shared/viewSmoke';

test('Widoczny tekst przycisku z ikoną działa niezależnie od jego nazwy dostępności',async({page})=>{
 await page.setContent('<style>button::before{content:"↻ "}</style><main><h1>Lista</h1><button aria-label="Odśwież dane">Synchronizuj</button></main>');
 await assertViewSnapshot(page.locator('main'),{headings:[{tag:'h1',text:'Lista'}],tables:[],fields:[],buttons:['Synchronizuj'],empty:[],links:[]});
});
