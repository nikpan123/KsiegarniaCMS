import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { NewRedirectsPage } from "../../pages/redirects/NewRedirectsPage";

export class NewRedirectsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewRedirectsPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.source, label: "Pole SOURCE" },
      { selector: formFields.destination, label: "Pole DESTINATION" },
      { selector: formFields.enabled, label: "Pole ENABLED" },
      { selector: formFields.permanent, label: "Pole PERMANENT" },
      { selector: formFields.only404, label: "Pole 404" },
      { selector: formFields.retail, label: "Pole KSIĘGARNIA DETALICZNA" },
      { selector: formFields.empik, label: "Pole EMPIK" },
      { selector: formFields.academy, label: "Pole AKADEMIA" },
      { selector: formFields.wholesale, label: "Pole KSIĘGARNIA HURTOWA" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}