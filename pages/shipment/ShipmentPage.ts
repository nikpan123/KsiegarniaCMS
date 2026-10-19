import { Page } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { shipmentLocators } from "../../locators/shipment/shipmentLocators";
import { commonLocators } from "../../locators/commonLocators";

export class ShipmentPage extends BasePage {
  filters = shipmentLocators.filters;
  columns = shipmentLocators.columns;
  buttons = commonLocators.buttons;

  constructor(page: Page) {
    super(page);
  }

  public async open() {
    await super.open("shipments");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}
