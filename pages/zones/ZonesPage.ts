import { BasePage } from "../base/BasePage";
import { zonesLocators } from "../../locators/zones/zonesLocators";
import { commonLocators } from "../../locators/commonLocators";

export class ZonesPage extends BasePage {
  menu = zonesLocators.menu;
  filters = zonesLocators.filters;
  columns = zonesLocators.columns;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("zones");
  }

  public async clickCreateButton() {
    await this.createButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }

  public async waitForMenuVisible() {
    await this.page.locator(this.menu.href1).waitFor({ state: "visible", timeout: 10000 });
  }
}