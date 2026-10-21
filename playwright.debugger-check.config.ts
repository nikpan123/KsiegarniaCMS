import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./checks',testMatch:'debugger-offline.spec.ts',workers:1,retries:0,timeout:30000,outputDir:'test-results/debugger-offline',reporter:[['list']],use:{headless:true,viewport:{width:1000,height:700}}});
