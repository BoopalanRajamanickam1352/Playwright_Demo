import test, { Browser, BrowserContext, chromium, ElementHandle, Page } from "@playwright/test"
test.describe("How to handle Alerts", async () => {
    let browser: Browser
    let context: BrowserContext
    let page: Page

    test("Login test", async ({ page }) => {
        console.log("User B");
    });

})