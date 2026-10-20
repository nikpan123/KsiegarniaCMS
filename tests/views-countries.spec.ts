import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Kraje", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "countries", testInfo);
});
