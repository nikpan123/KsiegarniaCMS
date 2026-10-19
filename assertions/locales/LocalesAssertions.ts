import { Page } from "@playwright/test";
import { LocalesPage } from "../../pages/locales/LocalesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class LocalesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: LocalesPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.filters.code, label: "Filtr KOD" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.codeColumn, label: "Kolumna KOD" },
      { selector: columns.name, label: "Kolumna NAZWA" },
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