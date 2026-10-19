import { Page } from "@playwright/test";
import { InventoryPage } from "../../pages/inventory/InventoryPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class InventoryAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: InventoryPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.code, label: "Filtr KOD" },
      { selector: filters.name, label: "Filtr NAZWA" },
      { selector: filters.onHand, label: "Filtr ZAPASY" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.nameColumn, label: "Kolumna NAZWA" },
      { selector: columns.codeColumn, label: "Kolumna KOD" },
      { selector: columns.inventory, label: "Kolumna ZAPASY" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}