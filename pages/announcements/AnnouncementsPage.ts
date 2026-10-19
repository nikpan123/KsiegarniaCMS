import { BasePage } from "../base/BasePage";
import { announcementsLocators } from "../../locators/announcements/announcementsLocators";

export class AnnouncementsPage extends BasePage {
  filters = announcementsLocators.filters;
  columns = announcementsLocators.columns;

  public async open() {
    await super.open("admin/announcements");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}
