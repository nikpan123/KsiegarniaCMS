import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Stawki podatkowe — edycja", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-tax-rates-record-edit", testInfo);
});
