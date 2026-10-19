import { Page } from "@playwright/test";
import { CountriesPage } from "../../pages/countries/CountriesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class CountriesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: CountriesPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.code, label: "Filtr KOD" },
      { selector: filters.enabled, label: "Filtr DOSTĘPNY" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.codeColumn, label: "Kolumna KOD" },
      { selector: columns.name, label: "Kolumna NAZWA" },
      { selector: columns.enabledColumn, label: "Kolumna DOSTĘPNY" },
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