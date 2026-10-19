import { Page } from "@playwright/test";
import { CatalogPromotionsPage } from "../../pages/catalogPromotions/CatalogPromotionsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class CatalogPromotionsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: CatalogPromotionsPage) {
    super(page);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.code, label: "Kolumna KOD" },
      { selector: columns.name, label: "Kolumna NAZWA" },
      { selector: columns.startDate, label: "Kolumna DATA ROZPOCZĘCIA" },
      { selector: columns.endDate, label: "Kolumna DATA ZAKOŃCZENIA" },
      { selector: columns.priority, label: "Kolumna PRIORYTET" },
      { selector: columns.channels, label: "Kolumna KANAŁY" },
      { selector: columns.state, label: "Kolumna STATUS" },
      { selector: columns.enabled, label: "Kolumna DOSTĘPNY" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}