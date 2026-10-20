import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Strefy — edycja", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-zones-record-edit", testInfo);
});
