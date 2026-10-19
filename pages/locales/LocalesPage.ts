import { BasePage } from "../base/BasePage";
import { localesLocators } from "../../locators/locales/localesLocators";

export class LocalesPage extends BasePage {
  filters = localesLocators.filters;
  columns = localesLocators.columns;

  public async open() {
    await super.open("locales");
  }

  public async openFilters() {
    await this.filterButton().click();
  }
}