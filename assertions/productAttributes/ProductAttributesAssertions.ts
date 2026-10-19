import { Page } from "@playwright/test";
import { ProductAttributesPage } from "../../pages/productAttributes/ProductAttributesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class ProductAttributesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ProductAttributesPage) {
    super(page);
  }
  public async assertMenuVisible() {
    const { menu } = this.pageObject;
    await this.assertElementsVisible([
      { selector: menu.href1, label: "TEKST" },
      { selector: menu.href2, label: "POLE TEKSTOWE" },
      { selector: menu.href3, label: "POLE WYBORU" },
      { selector: menu.href4, label: "LICZBA CAŁKOWITA" },
      { selector: menu.href5, label: "PROCENT" },
      { selector: menu.href6, label: "DATA I GODZINA" },
      { selector: menu.href7, label: "DATA" },
      { selector: menu.href8, label: "WYBIERZ" },
    ]);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.code, label: "Filtr KOD" },
      { selector: filters.translatable, label: "Filtr TRANSLATABLE" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.codeColumn, label: "Kolumna KOD" },
      { selector: columns.name, label: "Kolumna NAZWA" },
      { selector: columns.type, label: "Kolumna TYP" },
      { selector: columns.translatableColumn, label: "Kolumna TRANSLATABLE" },
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