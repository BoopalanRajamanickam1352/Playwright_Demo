import { chromium } from "@playwright/test";

const { test, expect } = require('@playwright/test');

test('Handle multiple tabs', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Wait for new tab + click the link
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("[href*='documents-request']").click()
    ]);

    // Wait for new tab to load
    await newPage.waitForLoadState();

    console.log(await newPage.title());

    await page.waitForLoadState();
    console.log(await page.title());

});