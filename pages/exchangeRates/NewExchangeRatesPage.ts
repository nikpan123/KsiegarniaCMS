import { BasePage } from "../base/BasePage";
import { newExchangeRatesLocators } from "../../locators/exchangeRates/newExchangeRatesLocators";

export class NewExchangeRatesPage extends BasePage {
  formFields = newExchangeRatesLocators.form;

  public async open() {
    await super.open("exchange-rates/new");
  }
}