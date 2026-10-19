import { Page } from "@playwright/test";
import { PaymentMethodsPage } from "../../pages/paymentMethods/PaymentMethodsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class PaymentMethodsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: PaymentMethodsPage) {
    super(page);
  }

  public async assertMenuVisible() {
    const { menu } = this.pageObject;
    await this.assertElementsVisible([
      { selector: menu.href1, label: "EKSPRESOWA REALIZACJA TRANSAKCJI PAYPAL" },
      { selector: menu.href2, label: "STRIPE" },
      { selector: menu.href3, label: "TRYB OFFLINE" },
      { selector: menu.href4, label: "PAYPAL" },
      { selector: menu.href5, label: "PAYU" },
    ]);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.search, label: "Filtr SZUKAJ" },
      { selector: filters.enabled, label: "Filtr DOSTĘPNY" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.position, label: "Kolumna POŁOŻENIE" },
      { selector: columns.code, label: "Kolumna KOD" },
      { selector: columns.name, label: "Kolumna NAZWA" },
      { selector: columns.gateway, label: "Kolumna BRAMKA" },
      { selector: columns.enabledColumn, label: "Kolumna DOSTĘPNY" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    const { specificButtons } = this.pageObject;
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: "Przycisk UTWÓRZ" },
      { selector: specificButtons.payPal, label: "Przycisk ENABLE PAYPAL" },
      { selector: this.pageObject.deleteButton(), label: "Przycisk USUŃ" },
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}