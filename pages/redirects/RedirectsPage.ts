import { Page } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { redirectsLocators } from "../../locators/redirects/redirectsLocators";
import { commonLocators } from "../../locators/commonLocators";

export class RedirectsPage extends BasePage {
  filters = redirectsLocators.filters;
  columns = redirectsLocators.columns;
  buttons = commonLocators.buttons;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("redirects");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}
