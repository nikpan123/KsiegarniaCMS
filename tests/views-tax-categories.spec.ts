import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Kategorie podatkowe", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "tax-categories", testInfo);
});
