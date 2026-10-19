import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { NewSpecialOffersProductSetPage } from "../../pages/specialOffers/NewSpecialOffersProductSetPage";

export class NewSpecialOffersProductSetAssertions extends BaseAssertions {
  private formFields: NewSpecialOffersProductSetPage['formFields'];

  constructor(page: Page, private pageObject: NewSpecialOffersProductSetPage) {
    super(page);
    this.formFields = this.pageObject.formFields;
  }

  public async assertDetailsTabVisible() {
    await this.assertElementsVisible([
      { selector: this.formFields.code, label: "Pole KOD" },
      { selector: this.formFields.merchandiseCode, label: "Pole KOD HANDLOWY" },
      { selector: this.formFields.externalId, label: "Pole IDENTYFIKATOR JAPA" },
      { selector: this.formFields.enabledProduct, label: "Pole DOSTĘPNY" },
      { selector: this.formFields.visibleOnList, label: "Pole WIDOCZNY NA LISTACH" },
      { selector: this.formFields.visibleInBookshop, label: "WIDOCZNY W KSIĘGARNI" },
      { selector: this.formFields.retail, label: "KSIĘGARNIA DETALICZNA" },
      { selector: this.formFields.empik, label: "EMPIK" },
      { selector: this.formFields.academy, label: "AKADEMIA" },
      { selector: this.formFields.wholesale, label: "KSIĘGARNIA HURTOWA" },
      { selector: this.formFields.name, label: "Pole NAZWA" },
      { selector: this.formFields.slug, label: "Pole FRAGMENT URL" },
      { selector: this.formFields.addElement, label: "Pole OPIS" },
      { selector: this.formFields.metaKeywords, label: "Pole SŁOWA KLUCZOWE W SEKCJI META" },
      { selector: this.formFields.metaDescription, label: "Pole OPIS W SEKCJI META" },
      { selector: this.formFields.shortDescription, label: "Pole KRÓTKI OPIS" },
      { selector: this.formFields.dateFrom, label: "Pole DATA OD" },
      { selector: this.formFields.timeFrom, label: "Pole GODZINA OD" },
      { selector: this.formFields.dateTo, label: "Pole DATA DO" },
      { selector: this.formFields.timeTo, label: "Pole GODZINA DO" },
      { selector: this.formFields.enabledOffer, label: "Pole DOSTĘPNY" },
      { selector: this.formFields.ignoreCatalogPromotions, label: "Pole RADIO" },
    ]);
  }

  public async assertTaxonomyTabVisible() {
    await this.assertElementsVisible([
      { selector: this.formFields.mainGroups, label: "Pole GŁÓWNE GRUPY" },
      { selector: this.formFields.mainBuyAgainList, label: 'Pole LISTA DO WYŚWIETLENIA PO KLIKNIĘCIU NA "KUP PONOWNIE"' },
      { selector: this.formFields.taxonomyTree, label: "Pole KATEGORIE PRODUKTU" },
    ]);
  }

  public async assertAttributesTabVisible() {
    await this.assertElementsVisible([
      { selector: this.formFields.attributeChoice, label: "Pole ATRYBUTY" },
      { selector: this.formFields.addAttributes, label: "BUTTON DODAJ ATRYBUTY" },
    ]);
  }

  public async assertAssociationsTabVisible() {
    await this.assertElementsVisible([
      { selector: this.formFields.associationsDropdown, label: "Pole PODOBNE PRODUKTY" },
    ]);
  }

  public async assertMediaTabVisible() {
    await this.assertElementsVisible([
      { selector: this.formFields.addProductImages, label: "BUTTON DODAJ" },
      { selector: this.formFields.galleryTitle, label: "Pole TYTUŁ GALERII" },
      { selector: this.formFields.addProductFiles, label: "Pole BUTTON DODAJ" },
    ]);
  }

  public async assertCalloutTabVisible() {
    await this.assertElementsVisible([
      { selector: this.formFields.callouts, label: "Pole Labelki" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }
}