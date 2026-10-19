import { BasePage } from "../base/BasePage";
import { productAssociationTypesLocators } from "../../locators/productAssociationTypes/productAssociationTypesLocators";

export class ProductAssociationTypesPage extends BasePage {
  filters = productAssociationTypesLocators.filters;
  columns = productAssociationTypesLocators.columns;

  public async open() {
    await super.open("product-association-types");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}