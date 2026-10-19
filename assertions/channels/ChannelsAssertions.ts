import { Page } from "@playwright/test";
import { ChannelsPage } from "../../pages/channels/ChannelsPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class ChannelsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ChannelsPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.search, label: "Filtr SZUKAJ" },
      { selector: filters.enabled, label: "Filtr DOSTĘPNY" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.name, label: "Kolumna NAZWA" },
      { selector: columns.code, label: "Kolumna KOD" },
      { selector: columns.theme, label: "Kolumna MOTYW" },
      { selector: columns.enabledColumn, label: "Kolumna DOSTĘPNY" },
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