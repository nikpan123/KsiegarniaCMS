import { BasePage } from "../base/BasePage";
import { exchangeRatesLocators } from "../../locators/exchangeRates/exchangeRatesLocators";

export class ExchangeRatesPage extends BasePage {
  filters = exchangeRatesLocators.filters;
  columns = exchangeRatesLocators.columns;

  public async open() {
    await super.open("exchange-rates");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}