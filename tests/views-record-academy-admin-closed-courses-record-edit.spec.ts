import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Szkolenia dla rad — edycja", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-academy-admin-closed-courses-record-edit", testInfo);
});
