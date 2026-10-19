import { Page } from "@playwright/test";
import { NewExchangeRatesPage } from "../../pages/exchangeRates/NewExchangeRatesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewExchangeRatesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewExchangeRatesPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.sourceCurrency, label: "Pole WALUTA ŹRÓDŁOWA" },
      { selector: formFields.targetCurrency, label: "Pole WALUTA DOCELOWA" },
      { selector: formFields.ratio, label: "Pole WSPÓŁCZYNNIK" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}