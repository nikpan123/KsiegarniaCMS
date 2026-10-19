import { expect, Locator, Page } from "@playwright/test";
import { goto } from "../../shared/utils";
import { commonLocators } from "../../locators/commonLocators";

/**
 * Klasa bazowa dla stron w aplikacji, dostarczająca wspólne metody i lokatory.
 */
export class BasePage {
  constructor(protected page: Page) {}

  // Lokatory przycisków wspólne dla wielu stron
  cancelButton = () => this.page.locator(commonLocators.buttons.cancelButton);
  createButton = () => this.page.locator(commonLocators.buttons.createButton);
  deleteButton = () => this.page.locator(commonLocators.buttons.deleteButton);
  exportButton = () => this.page.locator(commonLocators.buttons.exportButton);
  filterButton = () => this.page.locator(commonLocators.buttons.filterButton);
  formAddAction = () => this.page.locator(commonLocators.buttons.formAddAction);
  formAddNewCountry = () => this.page.locator(commonLocators.buttons.formAddNewCountry);
  formAddRule = () => this.page.locator(commonLocators.buttons.formAddRule);
  formAddValue = () => this.page.locator(commonLocators.buttons.formAddValue);
  formAddVoivodeship = () => this.page.locator(commonLocators.buttons.formAddVoivodeship);
  formCreateButton = () => this.page.locator(commonLocators.buttons.formCreateButton);
  formTaxonomyCreateButton = () => this.page.locator(commonLocators.buttons.formTaxonomyCreateButton);
  resultsCount = () => this.page.locator(commonLocators.buttons.resultsCount);
  syncButton = () => this.page.locator(commonLocators.buttons.syncButton);

  /**
   * Otwiera stronę pod podaną ścieżką.
   * @param path Ścieżka URL do otwarcia (np. "/dashboard").
   */
  public async open(path: string): Promise<void> {
    await goto(this.page, path);
  }
}