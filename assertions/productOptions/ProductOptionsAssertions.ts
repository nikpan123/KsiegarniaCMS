import { Page } from "@playwright/test";
import { ProductOptionsPage } from "../../pages/productOptions/ProductOptionsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class ProductOptionsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ProductOptionsPage) {
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
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.position, label: "Kolumna POŁOŻENIE" },
      { selector: columns.code, label: "Kolumna KOD" },
      { selector: columns.name, label: "Kolumna NAZWA" },
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
