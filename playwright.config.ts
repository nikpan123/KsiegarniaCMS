import path from "node:path";
import {tmpdir} from "node:os";
import {randomUUID} from "node:crypto";
import { defineConfig, devices } from "@playwright/test";
import { contextOptions } from "./config/context";

export default defineConfig({
  testDir: "./tests",
  metadata: {qaBrowserPreviewDirectory:path.join(tmpdir(), "qa-browser-preview-"+randomUUID())},
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["list"],
    ["./shared/browser-preview-reporter.cjs"],
    ["html", { open: "never" }],
    ["json", { outputFile: "test-results/results.json" }],
  ],
  use: {
    ...contextOptions,
    baseURL: process.env.BASE_URL,
    storageState: "auth.json",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  globalSetup: "./global-setup.ts",
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
  ],
});
