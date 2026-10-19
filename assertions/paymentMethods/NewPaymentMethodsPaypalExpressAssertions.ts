import { Page } from "@playwright/test";
import { NewPaymentMethodsPaypalExpressPage } from "../../pages/paymentMethods/NewPaymentMethodsPaypalExpressPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewPaymentMethodsPaypalExpressAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewPaymentMethodsPaypalExpressPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.zone, label: "Pole STREFA" },
      { selector: formFields.position, label: "Pole POZYCJA" },
      { selector: formFields.enabled, label: "Pole AKTYWNA?" },
      { selector: formFields.retail, label: "Pole KSIĘGARNIA DETALICZNA" },
      { selector: formFields.empik, label: "Pole EMPIK" },
      { selector: formFields.academy, label: "Pole AKADEMIA" },
      { selector: formFields.wholesale, label: "Pole KSIEGARNIA HURTOWA" },
      { selector: formFields.factoryName, label: "Pole TYP" },
      { selector: formFields.userName, label: "Pole NAZWA UŻYTKOWNIKA" },
      { selector: formFields.password, label: "Pole HASŁO" },
      { selector: formFields.signature, label: "Pole PODPIS" },
      { selector: formFields.sandbox, label: "Pole SANDBOX" },
      { selector: formFields.name, label: "Pole NAZWA" },
      { selector: formFields.description, label: "Pole OPIS" },
      { selector: formFields.instruction, label: "Pole INSTRUKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    const { specificButtons } = this.pageObject;
    await this.assertElementsVisible([
      { selector: specificButtons.formChooseFile, label: "Przycisk WYBIERZ PLIK" },
      { selector: specificButtons.formAdd, label: "Przycisk DODAJ" },
      { selector: this.pageObject.formAddRule(), label: "Przycisk DODAJ REGUŁĘ" },
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}