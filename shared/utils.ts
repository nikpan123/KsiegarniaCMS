import { Page, Locator, expect } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_URL || "https://cms-ksiegarnia.gwodev.pl";

/**
 * Nawiguje do podanej ścieżki w obrębie BASE_URL.
 * @param {Page} page - Obiekt Playwright Page
 * @param {string} path - Ścieżka w obrębie BASE_URL, np. "admin/announcements"
 */
export async function goto(page: Page, path: string) {
  const url = `${BASE_URL}${path}`;
  console.log(`🔗 Przechodzenie do: ${url}`);
  await page.goto(url);
}

// Sprawdzenie widoczności pojedynczego elementu
export async function checkElementPresence(page: Page, selector: string, name: string) {
  await page.locator(selector).waitFor({ state: "visible", timeout: 5000 });
  console.log(`${name} jest widoczny`);
}

// Sprawdzenie opcji menu
export async function checkMenuOption(page: Page, href: string, name: string) {
  const option = page.locator(`a[href="${href}"]`);
  if (await option.isVisible()) {
    console.log(`✅ Opcja menu "${name}" jest widoczna`);
  } else {
    throw new Error(`❌ Opcja menu "${name}" NIE jest widoczna`);
  }
}

// Kliknięcie w przycisk na podstawie podanego lokatora
export async function clickOnButton(page: Page, locator: string | Locator) {
  const button = typeof locator === "string" ? page.locator(locator) : locator;
  await button.click();
}

// Sprawdzenie, czy podany tekst znajduje się na stronie
export async function checkTextPresence(page: Page, expectedText: string, description: string = "Tekst") {
  const pageContent = await page.textContent("body"); // Pobieramy cały tekst ze strony
  if (pageContent && pageContent.includes(expectedText)) {
    console.log(`✅ ${description} "${expectedText}" jest obecny na stronie`);
  } else {
    throw new Error(`❌ ${description} "${expectedText}" NIE jest obecny na stronie`);
  }
}

// Sprawdzenie, czy tekst znajduje się na stronie i sprawdzenie tabeli
export async function checkTableVisibilityOnSite(
  page: Page,
  noResultsText: string,
  tableSelector: string,
  timeout: number = 5000
): Promise<boolean> {
  const textLocator = page.locator(`text="${noResultsText}"`);
  const tableLocator = page.locator(tableSelector);

  if (await textLocator.count() > 0) {
    console.log(`Tekst "${noResultsText}" znaleziony, tabela nie powinna być widoczna`);
    await expect(tableLocator).not.toBeVisible({ timeout });
    return false; // Tabela nie jest widoczna
  } else {
    console.log(`Tekst "${noResultsText}" nie znaleziony, tabela powinna być widoczna`);
    await expect(tableLocator).toBeVisible({ timeout });
    return true; // Tabela jest widoczna
  }
}