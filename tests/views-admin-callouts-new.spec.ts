import {test} from '../shared/browser-preview';
import {checkView} from '../shared/viewSmoke';

test("Widoki: Nowa labelka Zarządzaj labelkami", {tag:'@views'}, async ({page},testInfo) => {
  await checkView(page, "admin-callouts-new", testInfo);
});
