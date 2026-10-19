import { Page } from "@playwright/test";
import { NewChannelsPage } from "../../pages/channels/NewChannelsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewChannelsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewChannelsPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.name, label: "Pole NAZWA" },
      { selector: formFields.color, label: "Pole KOLOR" },
      { selector: formFields.enabled, label: "Pole DOSTĘPNY" },
      { selector: formFields.hostname, label: "Pole NAZWA HOSTA" },
      { selector: formFields.email, label: "Pole EMAIL DO KONTAKTU" },
      { selector: formFields.phoneNumber, label: "Pole CONTACT PHONE NUMBER" },
      { selector: formFields.description, label: "Pole OPIS" },
      { selector: formFields.countries, label: "Pole KRAJE" },
      { selector: formFields.company, label: "Pole FIRMA" },
      { selector: formFields.taxId, label: "Pole TAX ID" },
      { selector: formFields.countryCode, label: "Pole KRAJ" },
      { selector: formFields.street, label: "Pole ADRES" },
      { selector: formFields.city, label: "Pole MIEJSCOWOŚĆ" },
      { selector: formFields.postCode, label: "Pole KOD POCZTOWY" },
      { selector: formFields.accountNumber, label: "Pole NUMER KONTA" },
      { selector: formFields.baseCurrency, label: "Pole WALUTA PODSTAWOWA" },
      { selector: formFields.currencies, label: "Pole WALUTY" },
      { selector: formFields.defaultTaxZone, label: "Pole DOMYŚLNA STREFA PODATKOWA" },
      { selector: formFields.taxCalculationStrategy, label: "Pole STRATEGIA OBLICZANIA PODATKU" },
      { selector: formFields.themeName, label: "Pole MOTYW" },
      { selector: formFields.locales, label: "Pole USTAWIENIA REGIONALNE" },
      { selector: formFields.defaultLocale, label: "Pole DOMYŚLNE USTAWIENIA REGIONALNE" },
      { selector: formFields.menuTaxon, label: "Pole MENU TAXON" },
      { selector: formFields.skippingShippingStepAllowed, label: "Pole RADIO1" },
      { selector: formFields.skippingPaymentStepAllowed, label: "Pole RADIO2" },
      { selector: formFields.accountVerificationRequired, label: "Pole RADIO3" },
      { selector: formFields.guestTotalOrderAmountLimit, label: "Pole MAX WARTOŚĆ ZAMÓWIENIA" },
      { selector: formFields.defaultRealizationTime, label: "Pole CZAS REALIZACJI" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}