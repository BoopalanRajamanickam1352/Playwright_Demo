import test, { Browser, BrowserContext, chromium, ElementHandle, Page } from "@playwright/test"
test.describe("How to handle Alerts", async () => {
    let browser: Browser
    let context: BrowserContext
    let page: Page

    test("Login test", async ({ page }) => {
<<<<<<< HEAD
        console.log("User B");
=======
        console.log("User A");
>>>>>>> ed724543523241f88a81a921f4ec34376e341b92
    });

})