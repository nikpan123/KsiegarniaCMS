import { Page } from "@playwright/test";
import { NewLocalesPage } from "../../pages/locales/NewLocalesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewLocalesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewLocalesPage) {
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