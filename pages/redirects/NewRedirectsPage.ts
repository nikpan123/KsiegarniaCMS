import { Page } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { newRedirectsLocators } from "../../locators/redirects/newRedirectsLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewRedirectsPage extends BasePage {
  formFields = newRedirectsLocators.formFields;
  buttons = commonLocators.buttons;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("redirects/new");
  }
}
