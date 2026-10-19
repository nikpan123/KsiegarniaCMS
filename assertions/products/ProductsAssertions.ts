import { Page } from "@playwright/test";
import { ProductsPage } from "../../pages/products/ProductsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class ProductsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ProductsPage) {
    super(page);
  }

  public async assertMenuVisible() {
    const { menu } = this.pageObject;
    await this.assertElementsVisible([
      { selector: menu.href1, label: "KSIĄŻKA" },
      { selector: menu.href2, label: "APLIKACJA" },
      { selector: menu.href3, label: "KOMPOZYTOR" },
      { selector: menu.href4, label: "EBOOK" },
      { selector: menu.href5, label: "WYKŁAD ONLINE" },
      { selector: menu.href6, label: "APLIKACJA Z WARIANTAMI" },
      { selector: menu.href7, label: "KOMPOZYTOR Z WARIANTAMI" },
      { selector: menu.href8, label: "MULTIPODRĘCZNIK" },
    ]);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.search, label: "Filtr SZUKAJ" },
      { selector: filters.enabled, label: "Filtr DOSTĘPNY" },
      { selector: filters.channel, label: "Filtr KANAŁ" },
      { selector: filters.onHandType, label: "Filtr ZAPASY" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.image, label: "Kolumna ZDJĘCIE" },
      { selector: columns.code, label: "Kolumna KOD HANDLOWY" },
      { selector: columns.name, label: "Kolumna NAZWA" },
      { selector: columns.mainTaxon, label: "Kolumna GŁÓWNE GRUPY" },
      { selector: columns.enabledColumn, label: "Kolumna DOSTĘPNY" },
      { selector: columns.inventory, label: "Kolumna ZAPASY" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.deleteButton(), label: "Przycisk USUŃ" },
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Przycisk Liczba wyników" },
    ]);
  }
}