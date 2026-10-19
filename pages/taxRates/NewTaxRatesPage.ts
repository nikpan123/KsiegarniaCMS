import { BasePage } from "../base/BasePage";
import { newTaxRatesLocators } from "../../locators/taxRates/newTaxRatesLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewTaxRatesPage extends BasePage {
  formFields = newTaxRatesLocators.form;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("tax-rates/new");
  }
}