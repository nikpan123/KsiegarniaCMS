import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { RegulationsPage } from "../../pages/regulations/RegulationsPage";

export class RegulationsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: RegulationsPage) {
    super(page);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.name, label: "Kolumna NAZWA" },
      { selector: columns.code, label: "Kolumna KOD" },
      { selector: columns.content, label: "Kolumna TREŚĆ" },
      { selector: columns.version, label: "Kolumna WERSJA" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}