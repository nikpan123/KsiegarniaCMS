import { Page } from "@playwright/test";
import { ProductAssociationTypesPage } from "../../pages/productAssociationTypes/ProductAssociationTypesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class ProductAssociationTypesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ProductAssociationTypesPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.code, label: "Filtr KOD" },
      { selector: filters.name, label: "Filtr NAZWA" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.codeColumn, label: "Kolumna KOD" },
      { selector: columns.nameColumn, label: "Kolumna NAZWA" },
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