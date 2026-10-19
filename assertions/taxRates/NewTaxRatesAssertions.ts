import { Page } from "@playwright/test";
import { NewTaxRatesPage } from "../../pages/taxRates/NewTaxRatesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewTaxRatesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewTaxRatesPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.name, label: "Pole NAZWA" },
      { selector: formFields.category, label: "Pole KATEGORIA" },
      { selector: formFields.zone, label: "Pole STREFA" },
      { selector: formFields.calculator, label: "Pole KALKULATOR" },
      { selector: formFields.amount, label: "Pole WARTOŚĆ" },
      { selector: formFields.includedInPrice, label: "Pole WLICZONY W CENĘ?" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}