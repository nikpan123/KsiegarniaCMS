import { Page } from "@playwright/test";
import { NewUsersPage } from "../../pages/users/NewUsersPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewUsersAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewUsersPage) {
    super(page);
  }
  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.username, label: "Pole NAZWA UŻYTKOWNIKA" },
      { selector: formFields.email, label: "Pole NAZWA EMAIL" },
      { selector: formFields.plainPassword, label: "Pole HASŁO" },
      { selector: formFields.enabled, label: "Pole AKTYWNE" },
      { selector: formFields.firstName, label: "Pole IMIĘ" },
      { selector: formFields.lastName, label: "Pole NAZWISKO" },
      { selector: formFields.localeCode, label: "Pole USTAWIENIA REGIONALNE" },
    ]);
  }

  public async assertButtonsVisible() {
    const { specificButtons } = this.pageObject;
    await this.assertElementsVisible([
      { selector: specificButtons.formChooseFile, label: "Przycisk WYBIERZ PLIK" },
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}