import { expect, type Page } from "@playwright/test";
import { getBaseURL, requiredEnv } from "../config/env";

export async function loginToSylius(page: Page) {
  const username = requiredEnv("USER_NAME");
  const password = requiredEnv("PASSWORD");
  await page.goto(getBaseURL());
  await page.getByLabel("Nazwa użytkownika").fill(username);
  await page.getByLabel("Hasło").fill(password);
  const loginButton = page.getByRole("button", { name: "Login", exact: true });
  await loginButton.click();
  await expect(loginButton, "Logowanie nie powiodło się: formularz nadal jest widoczny.")
    .toBeHidden();
}
