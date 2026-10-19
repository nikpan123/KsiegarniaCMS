import { chromium, FullConfig } from "@playwright/test";
import { loginToSylius } from "./shared/login";
import { contextOptions } from "./config/context";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();

  await loginToSylius(page);
  await context.storageState({ path: "auth.json" });
  await browser.close();
}

export default globalSetup;