import { Page } from "@playwright/test";
import { NewProductAttributesPercentPage } from "../../pages/productAttributes/NewProductAttributesPercentPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewProductAttributesPercentAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewProductAttributesPercentPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.position, label: "Pole POŁOŻENIE" },
      { selector: formFields.type, label: "Pole TYP" },
      { selector: formFields.translatable, label: "Pole TRANSLATABLE" },
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