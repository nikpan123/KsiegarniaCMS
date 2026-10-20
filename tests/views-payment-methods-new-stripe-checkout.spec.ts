import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Nowa metoda płatności — Stripe Checkout", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "payment-methods-new-stripe-checkout", testInfo);
});
