import { BasePage } from "../base/BasePage";
import { newZonesCountryLocators } from "../../locators/zones/newZonesCountryLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewZonesCountryPage extends BasePage {
  formFields = newZonesCountryLocators.formFields;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("zones/country/new");
  }
}