import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { NewCartPromotionPage } from "../../pages/promotions/NewCartPromotionPage";

export class NewCartPromotionAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewCartPromotionPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.name, label: "Pole NAZWA" },
      { selector: formFields.personOrdering, label: "Pole ZLECENIODAWCA" },
      { selector: formFields.shortDescription, label: "Pole KRÓTKI OPIS" },
      { selector: formFields.description, label: "Pole OPIS" },
      { selector: formFields.usageLimit, label: "Pole LIMIT UŻYCIA" },
      { selector: formFields.priority, label: "Pole PRIORYTET" },
      { selector: formFields.couponBased, label: "Pole Z WYKORZYSTANIEM KUPONÓW" },
      { selector: formFields.exclusive, label: "Pole WYŁĄCZNA" },
      { selector: formFields.appliesToDiscounted, label: "Pole APPLIES TO ALREADY..." },
      { selector: formFields.applyOnlyHighestAction, label: "Pole ZAAPLIKUJ NAJLEPSZE PROMOCJE Z AKCJI" },
      { selector: formFields.retail, label: "Pole KSIĘGARNIA DETALICZNA" },
      { selector: formFields.empik, label: "Pole EMPIK" },
      { selector: formFields.academy, label: "Pole AKADEMIA" },
      { selector: formFields.wholesale, label: "Pole KSIĘGARNIA HURTOWA" },
      { selector: formFields.dateFrom, label: "Pole DATA OD" },
      { selector: formFields.timeFrom, label: "Pole GODZINA OD" },
      { selector: formFields.dateTo, label: "Pole DATA DO" },
      { selector: formFields.timeTo, label: "Pole GODZINA DO" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formAddRule(), label: "Przycisk DODAJ REGUŁĘ" },
      { selector: this.pageObject.formAddAction(), label: "Przycisk DODAJ AKCJĘ" },
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}