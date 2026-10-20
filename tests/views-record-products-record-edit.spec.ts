import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Produkty — edycja", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-products-record-edit", testInfo);
});
