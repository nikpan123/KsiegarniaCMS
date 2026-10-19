import { Page } from "@playwright/test";
import { AnnouncementsPage } from "../../pages/announcements/AnnouncementsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class AnnouncementsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: AnnouncementsPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.filters.search, label: "Filtr SZUKAJ" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.text, label: "Kolumna TEKST" },
      { selector: columns.dateFrom, label: "Kolumna WIDOCZNY OD" },
      { selector: columns.dateTo, label: "Kolumna WIDOCZNY DO" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}