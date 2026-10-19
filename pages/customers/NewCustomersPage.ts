import { BasePage } from "../base/BasePage";
import { newCustomersLocators } from "../../locators/customers/newCustomersLocators";

export class NewCustomersPage extends BasePage {
  formFields = newCustomersLocators.form;

  public async open() {
    await super.open("customers/new");
  }
}