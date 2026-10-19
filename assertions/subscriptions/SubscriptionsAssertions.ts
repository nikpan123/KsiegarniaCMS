import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { SubscriptionsPage } from "../../pages/subscriptions/SubscriptionsPage";

export class SubscriptionsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: SubscriptionsPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.name, label: "Filtr NAZWA" },
      { selector: filters.code, label: "Filtr KOD" },
      { selector: filters.email, label: "Filtr EMAIL" },
      { selector: filters.dateFrom, label: "Filtr DATA OD" },
      { selector: filters.timeFrom, label: "Filtr GODZINA OD" },
      { selector: filters.dateTo, label: "Filtr DATA DO" },
      { selector: filters.timeTo, label: "Filtr GODZINA DO" },
      { selector: filters.notify, label: "Filtr STATUS" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.image, label: "Kolumna ZDJĘCIE" },
      { selector: columns.variantCode, label: "Kolumna KOD" },
      { selector: columns.nameColumn, label: "Kolumna NAZWA" },
      { selector: columns.emailColumn, label: "Kolumna EMAIL" },
      { selector: columns.createdAt, label: "Kolumna DATA" },
      { selector: columns.notifyColumn, label: "Kolumna STATUS" },
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