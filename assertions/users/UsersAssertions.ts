import { Page } from "@playwright/test";
import { UsersPage } from "../../pages/users/UsersPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class UsersAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: UsersPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.search, label: "Filtr SZUKAJ" },
      { selector: filters.enabled, label: "Filtr DOSTĘPNY" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.firstName, label: "Kolumna IMIĘ" },
      { selector: columns.lastName, label: "Kolumna NAZWISKO" },
      { selector: columns.username, label: "Kolumna NAZWA UŻYTKOWNIKA" },
      { selector: columns.email, label: "Kolumna EMAIL" },
      { selector: columns.createdAt, label: "Kolumna DATA REJESTRACJI" },
      { selector: columns.enabledColumn, label: "Kolumna DOSTĘPNY" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.deleteButton(), label: "Przycisk USUŃ" },
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}