import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Aktualizacja cen", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "admin-price-importer", testInfo);
});
