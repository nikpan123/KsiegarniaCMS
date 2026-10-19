import { Page } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { newShippingCategoriesLocators } from "../../locators/shippingCategories/newShippingCategoriesLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewShippingCategoriesPage extends BasePage {
  formFields = newShippingCategoriesLocators.formFields;
  buttons = commonLocators.buttons;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("shipping-categories/new");
  }
}
