import { BasePage } from "../base/BasePage";
import { taxRatesLocators } from "../../locators/taxRates/taxRatesLocators";
import { commonLocators } from "../../locators/commonLocators";

export class TaxRatesPage extends BasePage {
  filters = taxRatesLocators.filters;
  columns = taxRatesLocators.columns;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("tax-rates");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}