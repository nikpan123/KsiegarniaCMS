import { BasePage } from "../base/BasePage";
import { calloutsLocators } from "../../locators/callouts/calloutsLocators";

export class CalloutsPage extends BasePage {
  columns = calloutsLocators.columns;

  public async open() {
    await super.open("admin/callouts");
  }
}