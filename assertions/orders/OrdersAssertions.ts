import { Page } from "@playwright/test";
import { OrdersPage } from "../../pages/orders/OrdersPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class OrdersAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: OrdersPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.number, label: "Filtr NUMER ZAMÓWIENIA" },
      { selector: filters.customer, label: "Filtr NAZWA KLIENTA" },
      { selector: filters.userUid, label: "Filtr IDENTYFIKATOR UŻYTKOWNIKA" },
      { selector: filters.dateFrom, label: "Filtr DATA OD" },
      { selector: filters.timeFrom, label: "Filtr GODZINA OD" },
      { selector: filters.dateTo, label: "Filtr DATA DO" },
      { selector: filters.timeTo, label: "Filtr GODZINA DO" },
      { selector: filters.channel, label: "Filtr KANAŁ" },
      { selector: filters.greaterThan, label: "Filtr WIĘKSZA NIŻ" },
      { selector: filters.lessThan, label: "Filtr MNIEJSZA NIŻ" },
      { selector: filters.shippingMethod, label: "Filtr METODA WYSYŁKI" },
      { selector: filters.paymentMethod, label: "Filtr METODA PŁATNOŚCI" },
      { selector: filters.sentToSoftLab, label: "Filtr WYSŁANE DO SOFTLABU" },
      { selector: filters.merchandiseCode, label: "Filtr KODY HANDLOWE" },
      { selector: filters.couponValue, label: "Filtr KOD RABATOWY" },
      { selector: filters.shippingAddress, label: "Filtr ADRES DOSTAWY" },
      { selector: filters.state, label: "Filtr STATUS" },
      { selector: filters.isPromoter, label: "Filtr CZY PROMOTORSKIE?" },
      { selector: filters.promoterOrder, label: "Filtr PROMOTORZY" },
      { selector: filters.type, label: "Filtr RODZAJ ZAMÓWIENIA" },
      { selector: filters.paymentState, label: "Filtr STATUS PŁATNOŚCI" },
      { selector: filters.shippingState, label: "Filtr STATUS PRZESYŁKI" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.orderId, label: "Kolumna NUMER" },
      { selector: columns.empikOrderId, label: "Kolumna EMPIK ID" },
      { selector: columns.date, label: "Kolumna DATA" },
      { selector: columns.customerColumn, label: "Kolumna KLIENT" },
      { selector: columns.customerEmail, label: "Kolumna EMAIL" },
      { selector: columns.phone, label: "Kolumna NUMER TELEFONU" },
      { selector: columns.sentToSoftLabColumn, label: "Kolumna SOFTLAB" },
      { selector: columns.channelColumn, label: "Kolumna KANAŁ" },
      { selector: columns.stateColumn, label: "Kolumna STATUS" },
      { selector: columns.paymentStateColumn, label: "Kolumna STATUS PŁATNOŚCI" },
      { selector: columns.shippingStateColumn, label: "Kolumna STATUS WYSYŁKI" },
      { selector: columns.total, label: "Kolumna ŁĄCZNIE" },
      { selector: columns.currencyCode, label: "Kolumna WALUTA" },
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