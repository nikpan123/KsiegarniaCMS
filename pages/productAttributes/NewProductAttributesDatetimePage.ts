import { BasePage } from "../base/BasePage";
import { newProductAttributesDatetimeLocators } from "../../locators/productAttributes/newProductAttributesDatetimeLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewProductAttributesDatetimePage extends BasePage {
  formFields = newProductAttributesDatetimeLocators.form;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("product-attributes/datetime/new");
  }
}