import { test } from "../shared/browser-preview";
import { NewChannelsPage } from "../pages/channels/NewChannelsPage";
import { NewChannelsAssertions } from "../assertions/channels/NewChannelsAssertions";

test("Nowy kanał", async ({ page }) => {
  const newChannelsPage = new NewChannelsPage(page);
  const assertions = new NewChannelsAssertions(page, newChannelsPage);

  await newChannelsPage.open();

  await assertions.assertFormVisible();
  await assertions.assertButtonsVisible();
});