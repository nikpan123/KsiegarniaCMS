import { BasePage } from "../base/BasePage";
import { channelsLocators } from "../../locators/channels/channelsLocators";

export class ChannelsPage extends BasePage {
  filters = channelsLocators.filters;
  columns = channelsLocators.columns;

  public async open() {
    await super.open("channels");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}