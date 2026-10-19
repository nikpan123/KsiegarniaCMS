import { BasePage } from "../base/BasePage";
import { taxCategoriesLocators } from "../../locators/taxCategories/taxCategoriesLocators";
import { commonLocators } from "../../locators/commonLocators";

export class TaxCategoriesPage extends BasePage {
  filters = taxCategoriesLocators.filters;
  columns = taxCategoriesLocators.columns;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("tax-categories");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}