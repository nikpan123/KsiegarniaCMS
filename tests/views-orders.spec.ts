import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Zamówienia", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "orders", testInfo);
});
