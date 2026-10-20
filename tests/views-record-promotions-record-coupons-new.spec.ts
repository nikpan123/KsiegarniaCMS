import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Nowy kupon promocji", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-promotions-record-coupons-new", testInfo);
});
