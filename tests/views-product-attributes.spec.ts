import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Cechy", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "product-attributes", testInfo);
});
