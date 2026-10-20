import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Payload synchronizacji DPD", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "admin-dpd-product-sync-payloads", testInfo);
});
