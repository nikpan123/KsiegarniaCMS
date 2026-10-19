import { BasePage } from "../base/BasePage";
import { newUsersLocators } from "../../locators/users/newUsersLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewUsersPage extends BasePage {
  formFields = newUsersLocators.form;
  buttons = commonLocators.buttons;
  specificButtons = newUsersLocators.specificButtons;

  public async open() {
    await super.open("users/new");
  }
}