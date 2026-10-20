import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Produkty", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "products", testInfo);
});
