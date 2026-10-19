import { Page } from "@playwright/test";
import { CustomersPage } from "../../pages/customers/CustomersPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class CustomersAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: CustomersPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.name, label: "Filtr NAZWA KLIENTA" },
      { selector: filters.coupon, label: "Filtr KUPON" },
    ]);
  }

  public async checkCustomersTableVisibility() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.firstName, label: "Kolumna IMIĘ" },
      { selector: columns.lastName, label: "Kolumna NAZWISKO" },
      { selector: columns.email, label: "Kolumna EMAIL" },
      { selector: columns.createdAt, label: "Kolumna DATA REJESTRACJI" },
      { selector: columns.enabled, label: "Kolumna DOSTĘPNY" },
      { selector: columns.verified, label: "Kolumna ZWERYFIKOWANY" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async checkButtonPresence() {
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}