import { Page } from "@playwright/test";
import { NewCalloutsPage } from "../../pages/callouts/NewCalloutsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewCalloutsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewCalloutsPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole CODE" },
      { selector: formFields.name, label: "Pole NAME" },
      { selector: formFields.priority, label: "Pole PRIORITY" },
      { selector: formFields.display, label: "Pole DISPLAY" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}