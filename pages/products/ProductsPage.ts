import { BasePage } from "../base/BasePage";
import { productsLocators } from "../../locators/products/productsLocators";
import { commonLocators } from "../../locators/commonLocators";

export class ProductsPage extends BasePage {
  menu = productsLocators.menu;
  filters = productsLocators.filters;
  columns = productsLocators.columns;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("products");
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
