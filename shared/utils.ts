import {Page, Locator, expect} from "@playwright/test";
import {getBaseURL} from "../config/env";

export async function goto(page: Page, path: string) {
  await page.goto(new URL(path.replace(/^\/+/, ""), getBaseURL()).toString());
}
export async function checkElementPresence(page: Page, selector: string, name: string) {
  await expect(page.locator(selector), name).toBeVisible();
}
export async function checkMenuOption(page: Page, href: string, name: string) {
  await expect(page.locator(`a[href=${JSON.stringify(href)}]`), name).toBeVisible();
}
export async function clickOnButton(page: Page, locator: string | Locator) {
  await (typeof locator === "string" ? page.locator(locator) : locator).click();
}
export async function checkTextPresence(page: Page, expectedText: string, description: string = "Tekst") {
  await expect(page.locator("body"), description).toContainText(expectedText);
}
export async function checkTableVisibilityOnSite(page: Page, noResultsText: string, tableSelector: string, timeout: number = 5000): Promise<boolean> {
  const empty = page.getByText(noResultsText, {exact:true});
  const table = page.locator(tableSelector);
  await expect.poll(async () => (await empty.isVisible()) || (await table.isVisible()), {
    timeout, message: "Oczekiwanie na tabelę albo komunikat o braku wyników",
  }).toBe(true);
  if(await empty.isVisible()) {await expect(table).not.toBeVisible({timeout});return false;}
  await expect(table).toBeVisible({timeout});return true;
}
