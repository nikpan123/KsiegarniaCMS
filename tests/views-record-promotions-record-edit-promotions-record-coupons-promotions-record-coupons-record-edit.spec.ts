import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Promocje koszykowe — zarządzaj kuponami — edytuj", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-promotions-record-edit-promotions-record-coupons-promotions-record-coupons-record-edit", testInfo);
});
