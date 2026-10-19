import { Page } from '@playwright/test';
import { NewZonesCountryPage } from '../../pages/zones/NewZonesCountryPage';
import { BaseAssertions } from '../base/BaseAssertions';

export class NewZonesCountryAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewZonesCountryPage) {
    super(page);
  }

  public async assertRequiredFormFieldsVisible() {
    const { formFields } = this.pageObject;

    await this.assertElementsVisible([
      { selector: formFields.type, label: 'Pole TYP' },
      { selector: formFields.code, label: 'Pole KOD' },
      { selector: formFields.name, label: 'Pole NAZWA' },
      { selector: formFields.scope, label: 'Pole ZAKRES' },
    ]);
  }

  public async assertFormButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.formAddNewCountry(), label: 'Przycisk DODAJ KRAJ' },
      { selector: this.pageObject.formCreateButton(), label: 'Przycisk UTWÓRZ' },
      { selector: this.pageObject.cancelButton(), label: 'Przycisk ANULUJ' },
    ]);
  }
}
