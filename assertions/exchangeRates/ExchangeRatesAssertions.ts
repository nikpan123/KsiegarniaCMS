import { Page } from "@playwright/test";
import { ExchangeRatesPage } from "../../pages/exchangeRates/ExchangeRatesPage";
import { BaseAssertions } from "../base/BaseAssertions";
import { checkTableVisibilityOnSite } from "../../shared/utils";

export class ExchangeRatesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ExchangeRatesPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.filters.currency, label: 'Filtr WALUTA' },
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
      'Brak wyników do wyświetlenia',
      this.pageObject.columns.checkbox
    );

    if (isTableVisible) {
      const { columns } = this.pageObject;

      await this.assertElementsVisible([
        { selector: columns.checkbox, label: 'Kolumna CHECKBOX' },
        { selector: columns.sourceCurrency, label: 'Kolumna WALUTA ŹRÓDŁOWA' },
        { selector: columns.targetCurrency, label: 'Kolumna WALUTA DOCELOWA' },
        { selector: columns.ratio, label: 'Kolumna WSPÓŁCZYNNIK WYMIANY' },
        { selector: columns.actions, label: 'Kolumna AKCJE' },
        { selector: this.pageObject.deleteButton(), label: 'Przycisk USUŃ' },
        { selector: this.pageObject.exportButton(), label: 'Przycisk EKSPORT' },
        { selector: this.pageObject.resultsCount(), label: 'Liczba wyników' },
      ]);
    }
  }
}