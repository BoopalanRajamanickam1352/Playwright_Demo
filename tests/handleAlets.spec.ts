import test, { Browser, BrowserContext, chromium, ElementHandle, Page } from "@playwright/test"
test.describe("How to handle Alerts", async () => {
    let browser: Browser
    let context: BrowserContext
    let page: Page
    test.beforeAll("Before all test", async () => {
        browser = await chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://letcode.in/alert")
    })

    test("Handle dialogs", async () => {
        const element = await page.$("#prompt");
        page.on("dialog", async (dialog) => {
            console.log('Message : ' + dialog.message())
            console.log('Default value : ' + dialog.defaultValue())
            console.log('Type : ' + dialog.type())
            dialog.accept("Hello")
        })
        await element?.click()
    })

    test.afterAll(async () => {
        await page.close();
        await browser.close();
    });

})
