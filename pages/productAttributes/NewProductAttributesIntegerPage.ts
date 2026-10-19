import { BasePage } from "../base/BasePage";
import { newProductAttributesIntegerLocators } from "../../locators/productAttributes/newProductAttributesIntegerLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewProductAttributesIntegerPage extends BasePage {
  formFields = newProductAttributesIntegerLocators.form;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("product-attributes/integer/new");
  }
}