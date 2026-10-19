import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { NewShippingCategoriesPage } from "../../pages/shippingCategories/NewShippingCategoriesPage";

export class NewShippingCategoriesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewShippingCategoriesPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.name, label: "Pole NAZWA" },
      { selector: formFields.description, label: "Pole OPIS" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}