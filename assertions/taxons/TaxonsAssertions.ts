import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { TaxonsPage } from "../../pages/taxons/TaxonsPage";

export class TaxonsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: TaxonsPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.codeInput, label: "Pole KOD" },
      { selector: formFields.parentDropdown, label: "Pole RODZIC" },
      { selector: formFields.enabledCheckbox, label: "Pole DOSTĘPNY" },
      { selector: formFields.showInFiltersCheckbox, label: "Pole POKAŻ W FILTRACH" },
      { selector: formFields.nameInput, label: "Pole NAZWA" },
      { selector: formFields.slugInput, label: "Pole FRAGMENT URL" },
      { selector: formFields.descriptionInput, label: "Pole OPIS" },
      { selector: formFields.addButton, label: "Button Dodaj MEDIA" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formTaxonomyCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}