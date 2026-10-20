import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Panel", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "dashboard", testInfo);
});
