import { Page } from "@playwright/test";
import { NewProductAttributesTextPage } from "../../pages/productAttributes/NewProductAttributesTextPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewProductAttributesTextAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewProductAttributesTextPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.position, label: "Pole POŁOŻENIE" },
      { selector: formFields.type, label: "Pole TYP" },
      { selector: formFields.translatable, label: "Pole TRANSLATABLE" },
      { selector: formFields.min, label: "Pole MINIMALNA DŁUGOŚĆ" },
      { selector: formFields.max, label: "Pole MAKSYMALNA DŁUGOŚĆ" },
      { selector: formFields.translationName, label: "Pole NAZWA" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk USUŃ" },
    ]);
  }
}