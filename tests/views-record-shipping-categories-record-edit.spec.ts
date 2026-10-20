import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Kategorie wysyłki — edycja", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-shipping-categories-record-edit", testInfo);
});
