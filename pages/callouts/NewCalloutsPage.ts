import { BasePage } from "../base/BasePage";
import { newCalloutsLocators } from "../../locators/callouts/newCalloutsLocators";

export class NewCalloutsPage extends BasePage {
  formFields = newCalloutsLocators.form;

  public async open() {
    await super.open("admin/callouts/new");
  }
}