import { Page } from "@playwright/test";
import { NewProductOptionsPage } from "../../pages/productOptions/NewProductOptionsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewProductOptionsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewProductOptionsPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.position, label: "Pole POZYCJA" },
      { selector: formFields.name, label: "Pole NAZWA" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formAddValue(), label: "Przycisk DODAJ WARTOŚĆ" },
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}