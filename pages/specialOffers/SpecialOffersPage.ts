import { Page } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { specialOffersLocators } from "../../locators/specialOffers/specialOffersLocators";
import { commonLocators } from "../../locators/commonLocators";

export class SpecialOffersPage extends BasePage {
  filters = specialOffersLocators.filters;
  columns = specialOffersLocators.columns;
  buttons = commonLocators.buttons;
  menu = specialOffersLocators.menu;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("admin/special-offers");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }

  public async clickCreateButton() {
    await this.createButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }

  public async waitForMenuVisible() {
    await this.page.locator(this.menu.href1).waitFor({ state: "visible", timeout: 10000 });
  }
}