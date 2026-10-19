import { BasePage } from "../base/BasePage";
import { countriesLocators } from "../../locators/countries/countriesLocators";

export class CountriesPage extends BasePage {
  filters = countriesLocators.filters;
  columns = countriesLocators.columns;

  public async open() {
    await super.open("countries");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}