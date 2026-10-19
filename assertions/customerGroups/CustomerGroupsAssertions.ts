import { Page } from "@playwright/test";
import { CustomerGroupsPage } from "../../pages/customerGroups/CustomerGroupsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class CustomerGroupsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: CustomerGroupsPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.filters.search, label: "Pole SZUKAJ" },
    ]);
  }

  public async assertCustomerGroupsTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
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