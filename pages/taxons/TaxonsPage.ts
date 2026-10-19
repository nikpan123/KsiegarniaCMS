import { BasePage } from "../base/BasePage";
import { taxonsLocators } from "../../locators/taxons/taxonsLocators";
import { commonLocators } from "../../locators/commonLocators";

export class TaxonsPage extends BasePage {
  formFields = taxonsLocators.form;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("taxons/new");
  }
}