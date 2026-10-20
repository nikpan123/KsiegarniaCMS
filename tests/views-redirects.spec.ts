import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Redirects", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "redirects", testInfo);
});
