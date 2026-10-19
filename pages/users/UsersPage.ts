import { BasePage } from "../base/BasePage";
import { usersLocators } from "../../locators/users/usersLocators";
import { commonLocators } from "../../locators/commonLocators";

export class UsersPage extends BasePage {
  filters = usersLocators.filters;
  columns = usersLocators.columns;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("users");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}