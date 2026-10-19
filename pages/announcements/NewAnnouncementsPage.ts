import { BasePage } from "../base/BasePage";
import { newAnnouncementsLocators } from "../../locators/announcements/newAnnouncementsLocators";

export class NewAnnouncementsPage extends BasePage {
  formFields = newAnnouncementsLocators.form;

  public async open() {
    await super.open("admin/announcements/new");
  }
}