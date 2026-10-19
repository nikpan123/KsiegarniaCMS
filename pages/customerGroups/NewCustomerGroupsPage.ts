import { BasePage } from "../base/BasePage";
import { newCustomerGroupsLocators } from "../../locators/customerGroups/newCustomerGroupsLocators";

export class NewCustomerGroupsPage extends BasePage {
  formFields = newCustomerGroupsLocators.form;

  public async open() {
    await super.open("customer-groups/new");
  }
}