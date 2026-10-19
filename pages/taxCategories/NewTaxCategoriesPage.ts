import { BasePage } from "../base/BasePage";
import { newTaxCategoriesLocators } from "../../locators/taxCategories/newTaxCategoriesLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewTaxCategoriesPage extends BasePage {
  formFields = newTaxCategoriesLocators.form;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("tax-categories/new");
  }
}