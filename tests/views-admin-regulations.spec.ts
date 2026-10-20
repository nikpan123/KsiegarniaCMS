import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Regulaminy", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "admin-regulations", testInfo);
});
