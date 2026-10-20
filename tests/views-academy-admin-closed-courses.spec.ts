import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Szkolenia dla rad", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "academy-admin-closed-courses", testInfo);
});
