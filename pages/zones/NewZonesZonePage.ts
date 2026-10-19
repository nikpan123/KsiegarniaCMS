import { BasePage } from "../base/BasePage";
import { newZonesZoneLocators } from "../../locators/zones/newZonesZoneLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewZonesZonePage extends BasePage {
  formFields = newZonesZoneLocators.formFields;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("zones/zone/new");
  }
}