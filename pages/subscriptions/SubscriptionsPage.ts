import { BasePage } from "../base/BasePage";
import { subscriptionsLocators } from "../../locators/subscriptions/subscriptionsLocators";
import { commonLocators } from "../../locators/commonLocators";

export class SubscriptionsPage extends BasePage {
  filters = subscriptionsLocators.filters;
  columns = subscriptionsLocators.columns;
  buttons = commonLocators.buttons;

  public async open() {
    await super.open("subscriptions");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}