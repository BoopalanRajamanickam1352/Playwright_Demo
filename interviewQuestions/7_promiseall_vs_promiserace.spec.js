const { test, expect, chromium } = require('@playwright/test')
let browser;
let page;

test("promise all", async ({ page }) => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()
    const page3 = await context.newPage()

    await Promise.all(
        [
            page1.goto("https://www.google.com"),
            page2.goto("https://www.facebook.com"),
            page3.goto("https://www.selenium.com")
        ]
    )
    console.log("All pages opened");
}),

    test("Promise race", async () => {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await page.locator("#username").fill("student")
        await page.locator("#password").fill("Password1234")
        await page.locator("#submit").click()

        const success = expect(page.getByRole("heading", { name: "Logged In Successfully" })).toBeVisible();

        const failure = expect(page.locator("#error")).toBeVisible();

        await Promise.race([
            success,
            failure
        ]);

        console.log("One of the messages appeared first");

        await browser.close();

    })