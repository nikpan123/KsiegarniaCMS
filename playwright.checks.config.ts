import {defineConfig,devices} from '@playwright/test';
export default defineConfig({testDir:'./checks',fullyParallel:false,workers:1,expect:{timeout:200},use:{...devices['Desktop Chrome']},reporter:'line'});
