import { BasePage } from "../base/BasePage";
import { productAttributesLocators } from "../../locators/productAttributes/productAttributesLocators";
import { commonLocators } from "../../locators/commonLocators";

export class ProductAttributesPage extends BasePage {
  menu = productAttributesLocators.menu;
  filters = productAttributesLocators.filters;
  columns = productAttributesLocators.columns;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("product-attributes");
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