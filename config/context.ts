import type { BrowserContextOptions } from "@playwright/test";
import "./env";

export const contextOptions: BrowserContextOptions = {
  extraHTTPHeaders: process.env.X_TEST_TOKEN
    ? { "X-Tests-Token": process.env.X_TEST_TOKEN }
    : {},
};
