import { Page } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config();

// Funkcja do logowania do syliusa
export async function loginToSylius(page: Page) {

  // Nawigacja na stronę logowania
  await page.goto(process.env.BASE_URL!);

  // Wypełnij formularz logowania
  await page.getByLabel("Nazwa użytkownika").fill(process.env.USER_NAME!);
  await page.getByLabel("Hasło").fill(process.env.PASSWORD!);

  // Kliknij przycisk logowania
  await page.getByRole("button", { name: "Login" }).click();
}

