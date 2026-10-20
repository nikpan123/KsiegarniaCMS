import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Produkty — wylistuj warianty — utwórz", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-products-record-edit-products-record-variants-products-record-variants-new", testInfo);
});
