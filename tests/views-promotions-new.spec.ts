import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: New cart promotion Zarządzaj rabatami i kampaniami promocyjnymi", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "promotions-new", testInfo);
});
