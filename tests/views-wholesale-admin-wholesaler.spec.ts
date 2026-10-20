import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Hurtownicy", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "wholesale-admin-wholesaler", testInfo);
});
