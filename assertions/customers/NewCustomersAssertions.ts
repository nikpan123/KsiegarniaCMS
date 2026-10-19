import { Page } from "@playwright/test";
import { NewCustomersPage } from "../../pages/customers/NewCustomersPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewCustomersAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewCustomersPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.firstName, label: "Pole IMIĘ" },
      { selector: formFields.lastName, label: "Pole NAZWISKO" },
      { selector: formFields.email, label: "Pole EMAIL" },
      { selector: formFields.group, label: "Pole GRUPA" },
      { selector: formFields.createUser, label: "Radio button LOGOWANIE" },
      { selector: formFields.gender, label: "Pole PŁEĆ" },
      { selector: formFields.birthday, label: "Pole DATA URODZENIA" },
      { selector: formFields.phoneNumber, label: "Pole NUMER TELEFONU" },
      { selector: formFields.newsletter, label: "Pole NEWSLETTER" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}