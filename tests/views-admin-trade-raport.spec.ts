import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Raport handlowy (NOWY)", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "admin-trade-raport", testInfo);
});
