import { Page } from "@playwright/test";
import { NewProductAttributesSelectPage } from "../../pages/productAttributes/NewProductAttributesSelectPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewProductAttributesSelectAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewProductAttributesSelectPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.position, label: "Pole POŁOŻENIE" },
      { selector: formFields.type, label: "Pole TYP" },
      { selector: formFields.translatable, label: "Pole TRANSLATABLE" },
      { selector: formFields.multiple, label: "Pole WIELE" },
      { selector: formFields.min, label: "Pole MIN" },
      { selector: formFields.max, label: "Pole MAX" },
      { selector: formFields.valueKeyPrefix, label: "Pole PREFIX DLA KLUCZY WARTOŚCI" },
      { selector: formFields.min, label: "Pole MINIMALNA DŁUGOŚĆ" },
      { selector: formFields.max, label: "Pole MAKSYMALNA DŁUGOŚĆ" },
      { selector: formFields.translationName, label: "Pole NAZWA" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.addButton, label: "Przycisk DODAJ" },
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk USUŃ" },
    ]);
  }
}