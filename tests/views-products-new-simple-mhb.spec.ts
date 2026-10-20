import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Nowy produkt: Multipodręcznik", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "products-new-simple-mhb", testInfo);
});
