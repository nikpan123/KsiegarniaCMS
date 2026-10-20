import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Strefy", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "zones", testInfo);
});
