import { Page } from "@playwright/test";
import { NewCustomerGroupsPage } from "../../pages/customerGroups/NewCustomerGroupsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewCustomerGroupsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewCustomerGroupsPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.name, label: "Pole NAZWA" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}