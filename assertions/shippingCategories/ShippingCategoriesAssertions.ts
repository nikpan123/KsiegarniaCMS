import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { ShippingCategoriesPage } from "../../pages/shippingCategories/ShippingCategoriesPage";
import { checkTableVisibilityOnSite } from "../../shared/utils";

export class ShippingCategoriesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ShippingCategoriesPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.filters.search, label: "Filtr SZUKAJ" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.buttons.createButton, label: "Przycisk UTWÓRZ" },
    ]);
  }

  public async assertTableVisible() {
    const isTableVisible = await checkTableVisibilityOnSite(
      this.page,
      "Brak wyników do wyświetlenia",
      this.pageObject.columns.checkbox
    );

    if (isTableVisible) {
      const { columns } = this.pageObject;
      await this.assertElementsVisible([
        { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
        { selector: columns.code, label: "Kolumna KOD" },
        { selector: columns.name, label: "Kolumna NAZWA" },
        { selector: columns.createdAt, label: "Kolumna DATA UTWORZENIA" },
        { selector: columns.updatedAt, label: "Kolumna DATA AKTUALIZACJI" },
        { selector: columns.actions, label: "Kolumna AKCJE" },
        { selector: this.pageObject.deleteButton(), label: "Przycisk USUŃ" },
        { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
        { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
      ]);
    }
  }
}