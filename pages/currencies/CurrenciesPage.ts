import { BasePage } from "../base/BasePage";
import { currenciesLocators } from "../../locators/currencies/currenciesLocators";

export class CurrenciesPage extends BasePage {
  filters = currenciesLocators.filters;
  columns = currenciesLocators.columns;

  public async open() {
    await super.open("currencies");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}