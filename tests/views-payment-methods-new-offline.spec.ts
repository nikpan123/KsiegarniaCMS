import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Nowa metoda płatności — offline", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "payment-methods-new-offline", testInfo);
});
