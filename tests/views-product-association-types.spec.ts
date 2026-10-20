import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Typy powiązań", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "product-association-types", testInfo);
});
