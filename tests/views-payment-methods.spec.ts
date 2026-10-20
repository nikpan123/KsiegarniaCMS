import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Metody płatności", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "payment-methods", testInfo);
});
