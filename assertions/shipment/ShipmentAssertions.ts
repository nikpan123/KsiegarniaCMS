import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { ShipmentPage } from "../../pages/shipment/ShipmentPage";

export class ShipmentAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ShipmentPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.state, label: "Filtr STATUS" },
      { selector: filters.channel, label: "Filtr KANAŁ" },
      { selector: filters.shippingMethod, label: "Filtr METODA WYSYŁKI" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.date, label: "Kolumna DATA" },
      { selector: columns.shippedAt, label: "Kolumna WYSŁANO" },
      { selector: columns.order, label: "Kolumna ZAMÓWIENIE" },
      { selector: columns.channelColumn, label: "Kolumna KANAŁ" },
      { selector: columns.stateColumn, label: "Kolumna STATUS" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}