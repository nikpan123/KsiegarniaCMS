import { BasePage } from "../base/BasePage";
import { newZonesProvinceLocators } from "../../locators/zones/newZonesProvinceLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewZonesProvincePage extends BasePage {
  formFields = newZonesProvinceLocators.formFields;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("zones/province/new");
  }
}