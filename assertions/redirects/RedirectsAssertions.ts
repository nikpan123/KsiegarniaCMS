import { Page } from "@playwright/test";
import { BaseAssertions } from "../base/BaseAssertions";
import { RedirectsPage } from "../../pages/redirects/RedirectsPage";
import { checkTableVisibilityOnSite } from "../../shared/utils";

export class RedirectsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: RedirectsPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.filters.search, label: "Filtr SZUKAJ" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: "Przycisk UTWÓRZ" },
    ]);
  }

  public async assertTableVisible() {
    const isTableVisible = await checkTableVisibilityOnSite(
      this.page,
      "Brak wyników do wyświetlenia",
      this.pageObject.columns.checkbox
    );

    if (isTableVisible) {
      const { columns } = this.pageObject;
      await this.assertElementsVisible([
        { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
        { selector: columns.source, label: "Kolumna SOURCE" },
        { selector: columns.destination, label: "Kolumna DESTINATION" },
        { selector: columns.permanent, label: "Kolumna PERMANENT" },
        { selector: columns.enabled, label: "Kolumna ENABLED" },
        { selector: columns.count, label: "Kolumna COUNT" },
        { selector: columns.lastAccessed, label: "Kolumna LAST ACCESSED" },
        { selector: columns.actions, label: "Kolumna AKCJE" },
        { selector: this.pageObject.deleteButton(), label: "Przycisk USUŃ" },
        { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
        { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
      ]);
    }
  }
}