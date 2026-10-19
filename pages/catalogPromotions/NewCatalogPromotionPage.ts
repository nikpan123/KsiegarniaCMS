import { BasePage } from "../base/BasePage";
import { newCatalogPromotionLocators } from "../../locators/catalogPromotions/newCatalogPromotionLocators";

export class NewCatalogPromotionPage extends BasePage {
  formFields = newCatalogPromotionLocators.form;
  specificButtons = newCatalogPromotionLocators.specificButtons;

  public async open() {
    await super.open("catalog-promotions/new");
  }
}