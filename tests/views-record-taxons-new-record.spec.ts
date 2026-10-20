import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Nowa podtaksonomia", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "record-taxons-new-record", testInfo);
});
