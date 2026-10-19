import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { SpecialOffersPage } from "../../pages/specialOffers/SpecialOffersPage";

export class SpecialOffersAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: SpecialOffersPage) {
    super(page);
  }

  public async assertMenuOptionsVisible() {
    const { menu } = this.pageObject;
    await this.assertElementsVisible([
      { selector: menu.href1, label: "OFERTA PODSTAWOWA" },
      { selector: menu.href2, label: "OFERTA N+1" },
      { selector: menu.href3, label: "OFERTA BAZUJĄCA NA PRODUKTACH" },
      { selector: menu.href4, label: "OFERTA BAZUJĄCA NA ZESTAWACH" },
      { selector: menu.href5, label: "OFERTA BAZUJĄCA NA LISTACH" },
    ]);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.code, label: "Filtr KOD" },
      { selector: filters.name, label: "Filtr NAZWA" },
      { selector: filters.enabled, label: "Filtr DOSTĘPNY" },
      { selector: filters.type, label: "Filtr TYP" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.image, label: "Kolumna ZDJĘCIE" },
      { selector: columns.codeColumn, label: "Kolumna KOD" },
      { selector: columns.nameColumn, label: "Kolumna NAZWA" },
      { selector: columns.mainTaxon, label: "Kolumna GŁÓWNE GRUPY" },
      { selector: columns.enabledColumn, label: "Kolumna DOSTĘPNY" },
      { selector: columns.typeColumn, label: "Kolumna TYP" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}