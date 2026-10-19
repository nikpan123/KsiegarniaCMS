import { Page } from "@playwright/test";
import { NewCurrenciesPage } from "../../pages/currencies/NewCurrenciesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewCurrenciesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewCurrenciesPage) {
    super(page);
  }

  public async assertFormVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formFields.code, label: "Pole NAZWA" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}