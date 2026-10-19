import { BasePage } from "../base/BasePage";
import { newProductAttributesSelectLocators } from "../../locators/productAttributes/newProductAttributesSelectLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewProductAttributesSelectPage extends BasePage {
  formFields = newProductAttributesSelectLocators.form;
  addButton = newProductAttributesSelectLocators.specificButton.formAddButton;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("product-attributes/select/new");
  }
}