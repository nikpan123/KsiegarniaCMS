import { BasePage } from "../base/BasePage";
import { newProductOptionsLocators } from "../../locators/productOptions/newProductOptionsLocators";

export class NewProductOptionsPage extends BasePage {
  formFields = newProductOptionsLocators.form;

  public async open() {
    await super.open("product-options/new");
  }
}