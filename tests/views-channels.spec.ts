import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Kanały", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "channels", testInfo);
});
