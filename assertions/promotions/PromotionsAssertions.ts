import { Page } from '@playwright/test';
import { BaseAssertions } from '../base/BaseAssertions';
import { PromotionsPage } from '../../pages/promotions/PromotionsPage';
import { checkTableVisibilityOnSite } from '../../shared/utils';

export class PromotionsAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: PromotionsPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;

    await this.assertElementsVisible([
      { selector: filters.search, label: 'Filtr SZUKAJ' },
      { selector: filters.coupon, label: 'Filtr Z WYKORZYSTANIEM KUPONÓW' },
      { selector: filters.couponCode, label: 'Filtr KUPON' },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: 'Przycisk UTWÓRZ' },
      { selector: this.pageObject.deleteButton(), label: 'Przycisk USUŃ' },
      { selector: this.pageObject.exportButton(), label: 'Przycisk EKSPORT' },
      { selector: this.pageObject.resultsCount(), label: 'Liczba wyników' },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;

    const isTableVisible = await checkTableVisibilityOnSite(
      this.page,
      'Brak wyników do wyświetlenia',
      columns.checkbox
    );

    if (isTableVisible) {
      await this.assertElementsVisible([
        { selector: columns.checkbox, label: 'Kolumna CHECKBOX' },
        { selector: columns.priority, label: 'Kolumna PRIORYTET' },
        { selector: columns.code, label: 'Kolumna KOD' },
        { selector: columns.name, label: 'Kolumna NAZWA' },
        { selector: columns.couponBased, label: 'Kolumna KUPONY' },
        { selector: columns.usage, label: 'Kolumna ZUŻYCIE' },
        { selector: columns.personOrdering, label: 'Kolumna ZLECENIODAWCA' },
        { selector: columns.actions, label: 'Kolumna AKCJE' },
      ]);
    }
  }
}
