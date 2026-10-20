import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Recenzje produktu", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "product-reviews", testInfo);
});
