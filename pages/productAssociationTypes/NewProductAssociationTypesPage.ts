import { BasePage } from "../base/BasePage";
import { newProductAssociationTypesLocators } from "../../locators/productAssociationTypes/newProductAssociationTypesLocators";

export class NewProductAssociationTypesPage extends BasePage {
  formFields = newProductAssociationTypesLocators.form;

  public async open() {
    await super.open("product-association-types/new");
  }
}