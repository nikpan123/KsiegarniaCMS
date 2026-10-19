import { BasePage } from "../base/BasePage";
import { newProductAttributesTextLocators } from "../../locators/productAttributes/newProductAttributesTextLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewProductAttributesTextPage extends BasePage {
  formFields = newProductAttributesTextLocators.form;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("product-attributes/text/new");
  }
}