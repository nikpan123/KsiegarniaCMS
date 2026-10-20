import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Enable PayPal", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "payment-methods-new-sylius-pay-pal", testInfo);
});
