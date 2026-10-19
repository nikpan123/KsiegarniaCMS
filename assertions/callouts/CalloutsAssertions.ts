import { Page } from "@playwright/test";
import { CalloutsPage } from "../../pages/callouts/CalloutsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class CalloutsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: CalloutsPage) {
    super(page);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.code, label: "Kolumna KOD" },
      { selector: columns.name, label: "Kolumna NAZWA" },
      { selector: columns.priority, label: "Kolumna PRIORYTET" },
      { selector: columns.display, label: "Kolumna POKAŻ" },
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