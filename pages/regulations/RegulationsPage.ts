import { Page } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { regulationsLocators } from "../../locators/regulations/regulationsLocators";
import { commonLocators } from "../../locators/commonLocators";

export class RegulationsPage extends BasePage {
  columns = regulationsLocators.columns;
  buttons = commonLocators.buttons;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("admin/regulations");
  }
}
