import { Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { newSpecialOffersListBasedLocators } from "../../locators/specialOffers/newSpecialOffersListBasedLocators";
import { commonLocators } from "../../locators/commonLocators";

export class NewSpecialOffersListBasedPage extends BasePage {
  formFields = newSpecialOffersListBasedLocators.formFields;
  buttons = commonLocators.buttons;
  tabs = commonLocators.tabs;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("admin/special-offers/new/list_based");
  }

  public async clickDetailsTab() {
    await this.page.locator(this.tabs.details).click();
    console.log("🔍 Otwarcie zakładki Szczegóły");
  }

  public async clickTaxonomyTab() {
    await this.page.locator(this.tabs.taxonomy).click();
    console.log("🔍 Otwarcie zakładki Taksonomia");
    await this.page.waitForLoadState("networkidle");
  }

  public async clickAttributesTab() {
    await this.page.locator(this.tabs.attributes).click();
    console.log("🔍 Otwarcie zakładki Atrybuty");
  }

  public async clickAssociationsTab() {
    await this.page.locator(this.tabs.associations).click();
    console.log("🔍 Otwarcie zakładki Powiązania");
  }

  public async clickMediaTab() {
    await this.page.locator(this.tabs.media).click();
    console.log("🔍 Otwarcie zakładki Media");
  }

  public async clickCalloutTab() {
    await this.page.locator(this.tabs.callout).click();
    console.log("🔍 Otwarcie zakładki Labelki");
  }
}