import { BasePage } from "../base/BasePage";
import { catalogPromotionsLocators } from "../../locators/catalogPromotions/catalogPromotionsLocators";

export class CatalogPromotionsPage extends BasePage {
  columns = catalogPromotionsLocators.columns;

  public async open() {
    await super.open("catalog-promotions");
  }
}