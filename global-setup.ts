import { chromium, type FullConfig } from "@playwright/test";
import { loginToSylius } from "./shared/login";
import { contextOptions } from "./config/context";
import { getBaseURL, requiredEnv } from "./config/env";

export default async function globalSetup(config: FullConfig) {
  getBaseURL();
  requiredEnv("USER_NAME");
  requiredEnv("PASSWORD");
  const browser = await chromium.launch();
  try {
    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();
    await loginToSylius(page);
    const storageState = config.projects[0].use.storageState;
    if (typeof storageState !== "string") throw new Error("Brak ścieżki storageState.");
    await context.storageState({ path: storageState });
  } finally {
    await browser.close();
  }
}
