import { Page } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { newCartPromotionLocators } from "../../locators/promotions/newCartPromotionLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewCartPromotionPage extends BasePage {
  formFields = newCartPromotionLocators.formFields;
  buttons = commonLocators.buttons;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("promotions/new");
  }
}
