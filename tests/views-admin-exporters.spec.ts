import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Procesy eksportu", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "admin-exporters", testInfo);
});
