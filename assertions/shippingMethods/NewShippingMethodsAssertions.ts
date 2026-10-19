import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { NewShippingMethodsPage } from "../../pages/shippingMethods/NewShippingMethodsPage";

export class NewShippingMethodsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewShippingMethodsPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.zone, label: "Pole STREFA" },
      { selector: formFields.position, label: "Pole POZYCJA" },
      { selector: formFields.enabled, label: "Pole DOSTĘPNY" },
      { selector: formFields.retail, label: "Pole KSIĘGARNIA DETALICZNA" },
      { selector: formFields.empik, label: "Pole EMPIK" },
      { selector: formFields.academy, label: "Pole AKADEMIA" },
      { selector: formFields.wholesale, label: "Pole KSIĘGARNIA HURTOWA" },
      { selector: formFields.category, label: "Pole KATEGORIA" },
      { selector: formFields.categoryRequirement0, label: "Pole RADIO1" },
      { selector: formFields.categoryRequirement1, label: "Pole RADIO2" },
      { selector: formFields.categoryRequirement2, label: "Pole RADIO3" },
      { selector: formFields.taxCategory, label: "Pole KATEGORIA PODATKOWA" },
      { selector: formFields.calculator, label: "Pole KALKULATOR" },
      { selector: formFields.retailAmount, label: "Pole KSIĘGARNIA DETALICZNA" },
      { selector: formFields.empikAmount, label: "Pole EMPIK" },
      { selector: formFields.academyAmount, label: "Pole AKADEMIA" },
      { selector: formFields.wholesaleAmount, label: "Pole HURTOWA" },
      { selector: formFields.name, label: "Pole NAZWA" },
      { selector: formFields.description, label: "Pole OPIS" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.specificButtons.formChooseFile, label: "Przycisk WYBIERZ PLIK" },
      { selector: this.pageObject.formAddRule(), label: "Przycisk DODAJ REGUŁĘ" },
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ"},
    ]);
  }
}