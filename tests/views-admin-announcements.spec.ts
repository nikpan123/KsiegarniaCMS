import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Komunikaty", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "admin-announcements", testInfo);
});
