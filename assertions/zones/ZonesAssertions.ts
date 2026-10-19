import { Page } from "@playwright/test";
import { ZonesPage } from "../../pages/zones/ZonesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class ZonesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ZonesPage) {
    super(page);
  }

  public async assertMenuOptionVisible() {
    const { menu } = this.pageObject;
    await this.assertElementsVisible([
      { selector: menu.href1, label: "STREFA SKŁADAJĄCA SIĘ Z KRAJÓW" },
      { selector: menu.href2, label: "STREFA SKŁADAJĄCA SIĘ Z WOJEWÓDZTW" },
      { selector: menu.href3, label: "STREFA SKŁADAJĄCA SIĘ Z INNYCH STREF" },
    ]);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.name, label: "Filtr NAZWA" },
      { selector: filters.code, label: "Filtr KOD" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.codeColumn, label: "Kolumna KOD" },
      { selector: columns.nameColumn, label: "Kolumna NAZWA" },
      { selector: columns.type, label: "Kolumna TYP" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.deleteButton(), label: "Przycisk USUŃ" },
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}