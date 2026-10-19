import { Page } from "@playwright/test";
import { ConsultantsPage } from "../../pages/consultants/ConsultantsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class ConsultantsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ConsultantsPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.email, label: "Filtr EMAIL" },
      { selector: filters.firstName, label: "Filtr IMIĘ" },
      { selector: filters.lastName, label: "Filtr NAZWISKO" },
      { selector: filters.isSuspended, label: "Filtr ZAWIESZONY?" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.firstNameColumn, label: "Kolumna IMIĘ" },
      { selector: columns.lastNameColumn, label: "Kolumna NAZWISKO" },
      { selector: columns.emailColumn, label: "Kolumna EMAIL" },
      { selector: columns.isSuspendedColumn, label: "Kolumna ZAWIESZONY" },
      { selector: columns.showOnSite, label: "Kolumna POKAŻ NA STRONIE" },
      { selector: columns.showInCourseCreation, label: "Kolumna POKAŻ PRZY TWORZENIU SZKOLENIA" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.syncButton(), label: "Przycisk SYNCHRONIZUJ" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}