import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Zamówienia — historia", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-orders-record-orders-record-history", testInfo);
});
