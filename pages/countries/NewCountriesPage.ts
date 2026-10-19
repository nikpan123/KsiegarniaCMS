import { BasePage } from "../base/BasePage";
import { newCountriesLocators } from "../../locators/countries/newCountriesLocators";

export class NewCountriesPage extends BasePage {
  formFields = newCountriesLocators.form;

  public async open() {
    await super.open("countries/new");
  }
}