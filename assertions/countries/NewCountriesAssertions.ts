import { Page } from "@playwright/test";
import { NewCountriesPage } from "../../pages/countries/NewCountriesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewCountriesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewCountriesPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole NAZWA" },
      { selector: formFields.enabled, label: "Pole DOSTĘPNY" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formAddVoivodeship(), label: "Przycisk DODAJ WOJEWÓDZTWO" },
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}