import { Page } from "@playwright/test";
import { PaymentsPage } from "../../pages/payments/PaymentsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class PaymentsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: PaymentsPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.state, label: "Filtr STATUS" },
      { selector: filters.channel, label: "Filtr KANAŁ" },
      { selector: filters.orderType, label: "Filtr RODZAJ ZAMÓWIENIA" },
      { selector: filters.dateFrom, label: "Filtr DATA OD" },
      { selector: filters.timeFrom, label: "Filtr GODZINA OD" },
      { selector: filters.dateTo, label: "Filtr DATA DO" },
      { selector: filters.timeTo, label: "Filtr GODZINA DO" },
      { selector: filters.invoice, label: "Filtr FAKTURA" },
      { selector: filters.sentToSoftLab, label: "Filtr SOFTLAB" },
      { selector: filters.paymentMethod, label: "Filtr METODA PŁATNOŚCI" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.date, label: "Kolumna DATA" },
      { selector: columns.order, label: "Kolumna ZAMÓWIENIE" },
      { selector: columns.channel, label: "Kolumna KANAŁ" },
      { selector: columns.customer, label: "Kolumna KLIENT" },
      { selector: columns.state, label: "Kolumna STATUS" },
      { selector: columns.itemsTotal, label: "Kolumna PRODUKT ŁĄCZNIE" },
      { selector: columns.shipping, label: "Kolumna KOSZTY WYSYŁKI" },
      { selector: columns.total, label: "Kolumna ŁĄCZNIE" },
      { selector: columns.amount, label: "Kolumna PŁATNOŚCI" },
      { selector: columns.currency, label: "Kolumna WALUTA" },
      { selector: columns.softLab, label: "Kolumna SOFTLAB" },
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