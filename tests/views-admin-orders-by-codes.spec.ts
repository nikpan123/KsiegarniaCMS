import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Wyszukiwarka kodów", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "admin-orders-by-codes", testInfo);
});
