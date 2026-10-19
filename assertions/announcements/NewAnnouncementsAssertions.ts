import { Page } from "@playwright/test";
import { NewAnnouncementsPage } from "../../pages/announcements/NewAnnouncementsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewAnnouncementsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewAnnouncementsPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.addElement, label: "Button DODAJ ELEMENT" },
      { selector: formFields.type, label: "Pole TYP" },
      { selector: formFields.dateFrom, label: "Pole DATA OD" },
      { selector: formFields.timeFrom, label: "Pole GODZINA OD" },
      { selector: formFields.dateTo, label: "Pole DATA DO" },
      { selector: formFields.timeTo, label: "Pole GODZINA DO" },
      { selector: formFields.taxonomy, label: "Pole TAKSONOMIE" },
      { selector: formFields.attributes, label: "Pole ATRYBUTY" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}