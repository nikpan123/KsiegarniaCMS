import { Page } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { newShippingMethodsLocators } from "../../locators/shippingMethods/newShippingMethodsLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewShippingMethodsPage extends BasePage {
  formFields = newShippingMethodsLocators.formFields;
  specificButtons = newShippingMethodsLocators.specificButtons; // Specyficzne dla tej strony
  commonButtons = commonLocators.buttons; // Wspólne z BasePage

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("shipping-methods/new");
  }
}
