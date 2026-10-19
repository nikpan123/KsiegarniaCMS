import { Page } from "@playwright/test";
import { TaxRatesPage } from "../../pages/taxRates/TaxRatesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class TaxRatesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: TaxRatesPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.search, label: "Filtr SZUKAJ" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.code, label: "Kolumna KOD" },
      { selector: columns.name, label: "Kolumna NAZWA" },
      { selector: columns.zone, label: "Kolumna STREFA" },
      { selector: columns.category, label: "Kolumna KATEGORIA" },
      { selector: columns.amount, label: "Kolumna WARTOŚĆ" },
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