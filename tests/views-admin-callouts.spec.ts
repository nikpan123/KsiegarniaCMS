import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Labelki", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "admin-callouts", testInfo);
});
