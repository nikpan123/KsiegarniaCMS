import { BasePage } from "../base/BasePage";
import { newCurrenciesLocators } from "../../locators/currencies/newCurrenciesLocators";

export class NewCurrenciesPage extends BasePage {
  formFields = newCurrenciesLocators.form;

  public async open() {
    await super.open("currencies/new");
  }
}