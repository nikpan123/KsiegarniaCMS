import { BasePage } from "../base/BasePage";
import { newProductAttributesTextareaLocators } from "../../locators/productAttributes/newProductAttributesTextareaLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewProductAttributesTextareaPage extends BasePage {
  formFields = newProductAttributesTextareaLocators.form;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("product-attributes/textarea/new");
  }
}