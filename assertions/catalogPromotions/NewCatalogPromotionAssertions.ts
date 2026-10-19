import { Page } from "@playwright/test";
import { NewCatalogPromotionPage } from "../../pages/catalogPromotions/NewCatalogPromotionPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewCatalogPromotionAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewCatalogPromotionPage) {
    super(page);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.code, label: "Pole KOD" },
      { selector: formFields.name, label: "Pole NAZWA" },
      { selector: formFields.dateFrom, label: "Pole DATA OD" },
      { selector: formFields.timeFrom, label: "Pole GODZINA OD" },
      { selector: formFields.dateTo, label: "Pole DATA DO" },
      { selector: formFields.timeTo, label: "Pole GODZINA DO" },
      { selector: formFields.enabled, label: "Pole AKTYWNA" },
      { selector: formFields.priority, label: "Pole PRIORYTET" },
      { selector: formFields.exclusive, label: "Pole WYŁĄCZNA" },
      { selector: formFields.applyOnlyHighest, label: "Pole NAJWYŻSZY RABAT" },
      { selector: formFields.applyOnCart, label: "Pole TYLKO W KOSZYKU" },
      { selector: formFields.infoPromotionGroup, label: "Pole GRUPA RABATÓW W OKIENKU INFORMACYJNYM" },
      { selector: formFields.retail, label: "Pole KSIĘGARNIA DETALICZNA" },
      { selector: formFields.empik, label: "Pole EMPIK" },
      { selector: formFields.academy, label: "Pole AKADEMIA" },
      { selector: formFields.wholesale, label: "Pole KSIEGARNIA HURTOWA" },
      { selector: formFields.label, label: "Pole LABEL" },
      { selector: formFields.description, label: "Pole OPIS" },
    ]);
  }

  public async assertButtonsVisible() {
    const { specificButtons } = this.pageObject;
    await this.assertElementsVisible([
      { selector: specificButtons.addRuleInfoBoxScopes, label: "Przycisk DODAJ REGUŁY - INFO BOX" },
      { selector: specificButtons.addRuleConfigurationBoxScopes, label: "Przycisk DODAJ REGUŁY - KONFIGURACJA BOX" },
      { selector: specificButtons.addActionConfigurationBoxScopes, label: "Przycisk DODAJ AKCJE - KONFIGURACJA BOX" },
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}