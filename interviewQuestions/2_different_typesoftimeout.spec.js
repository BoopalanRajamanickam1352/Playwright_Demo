//default timeout is 30 seconds

import { chromium } from "@playwright/test"


const { test, expect, browser } = require('@playwright/test')
test('different timeouts', async () => {
    test.setTimeout(120000); //test.setTimeout() is used to change the maximum time allowed for one test.
    //overrides the global timeout only for that specific test.
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator('#userEmail').fill("anshika@gmail.com");
    await page.locator('#userPassword').fill("Iamking@000");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');


})
