import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Klienci", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "customers", testInfo);
});
