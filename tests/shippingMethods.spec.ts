import { test } from "../shared/browser-preview";
import { ShippingMethodsPage } from "../pages/shippingMethods/ShippingMethodsPage";
import { ShippingMethodsAssertions } from "../assertions/shippingMethods/ShippingMethodsAssertions";

test("Sposób wysyłki", async ({ page }) => {
  const shippingMethodsPage = new ShippingMethodsPage(page);
  const assertions = new ShippingMethodsAssertions(page, shippingMethodsPage);

  await shippingMethodsPage.open();

  await shippingMethodsPage.openFilters();
  await assertions.assertFiltersVisible();
  await assertions.assertTableVisible();
  await assertions.assertButtonsVisible();
});