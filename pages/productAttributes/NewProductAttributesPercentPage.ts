import { BasePage } from "../base/BasePage";
import { newProductAttributesPercentLocators } from "../../locators/productAttributes/newProductAttributesPercentLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewProductAttributesPercentPage extends BasePage {
  formFields = newProductAttributesPercentLocators.form;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("product-attributes/percent/new");
  }
}