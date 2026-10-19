import { BasePage } from "../base/BasePage";
import { newProductAttributesDateLocators } from "../../locators/productAttributes/newProductAttributesDateLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewProductAttributesDatePage extends BasePage {
  formFields = newProductAttributesDateLocators.form;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("product-attributes/date/new");
  }
}