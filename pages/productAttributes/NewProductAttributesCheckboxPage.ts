import { BasePage } from "../base/BasePage";
import { newProductAttributesCheckboxLocators } from "../../locators/productAttributes/newProductAttributesCheckboxLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewProductAttributesCheckboxPage extends BasePage {
  formFields = newProductAttributesCheckboxLocators.form;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("product-attributes/checkbox/new");
  }
}