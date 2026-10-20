import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Zapasy", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "inventory", testInfo);
});
