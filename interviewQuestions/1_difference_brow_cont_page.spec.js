//Browser - opening an instance of chromium
//Browser context - opening an isolated incognito browser with its own cookies, local storage and cache
//Page - single tab within the context

const { test, expect, chromium } = require('@playwright/test')

test('launching browser', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://eventhub.rahulshettyacademy.com/");
    console.log("success");

    const context2 = await browser.newContext()
    const page2 = await context2.newPage()

    await page2.goto("https://www.google.com")
    console.log("success 2")


});