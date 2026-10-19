import { BasePage } from "../base/BasePage";
import { consultantsLocators } from "../../locators/consultants/consultantsLocators";

export class ConsultantsPage extends BasePage {
  filters = consultantsLocators.filters;
  columns = consultantsLocators.columns;

  public async open() {
    await super.open("academy/admin/consultants");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}