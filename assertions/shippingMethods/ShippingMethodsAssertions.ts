import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { ShippingMethodsPage } from "../../pages/shippingMethods/ShippingMethodsPage";

export class ShippingMethodsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ShippingMethodsPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.search, label: "Filtr SZUKAJ" },
      { selector: filters.enabled, label: "Filtr DOSTĘPNY" },
      { selector: filters.archival, label: "Filtr ARCHIWALNE" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.position, label: "Kolumna POŁOŻENIE" },
      { selector: columns.code, label: "Kolumna KOD" },
      { selector: columns.name, label: "Kolumna NAZWA" },
      { selector: columns.zone, label: "Kolumna STREFA" },
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