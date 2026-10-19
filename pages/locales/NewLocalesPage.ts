import { BasePage } from "../base/BasePage";
import { newLocalesLocators } from "../../locators/locales/newLocalesLocators";

export class NewLocalesPage extends BasePage {
  formFields = newLocalesLocators.form;

  public async open() {
    await super.open("locales/new");
  }
}