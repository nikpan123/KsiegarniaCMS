import {debuggerStep} from '../shared/debugger-step';
import { test } from "../shared/browser-preview";
import { ChannelsPage } from "../pages/channels/ChannelsPage";
import { ChannelsAssertions } from "../assertions/channels/ChannelsAssertions";

test("Kanały", async ({ page }) => {
  const channelsPage = new ChannelsPage(page);
  const assertions = new ChannelsAssertions(page, channelsPage);

  await debuggerStep('Otwórz listę kanałów',()=>channelsPage.open());

  await debuggerStep('Rozwiń filtry wyszukiwania',()=>channelsPage.openFilters());
  await debuggerStep('Sprawdź filtry, tabelę i przyciski listy',async()=>{
  await assertions.assertFiltersVisible();
  await assertions.assertTableVisible();
  await assertions.assertButtonsVisible();
  });
});