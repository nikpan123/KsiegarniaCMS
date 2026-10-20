import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Produkty — wylistuj warianty", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-products-record-edit-products-record-variants", testInfo);
});
