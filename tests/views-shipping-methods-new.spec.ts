import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Nowa metoda wysyłki", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "shipping-methods-new", testInfo);
});
