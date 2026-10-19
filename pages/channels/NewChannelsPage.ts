import { BasePage } from "../base/BasePage";
import { newChannelsLocators } from "../../locators/channels/newChannelsLocators";

export class NewChannelsPage extends BasePage {
  formFields = newChannelsLocators.form;

  public async open() {
    await super.open("channels/new");
  }
}