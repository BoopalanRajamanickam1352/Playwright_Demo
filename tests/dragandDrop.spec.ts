import test, { Browser, BrowserContext, chromium, Page } from "@playwright/test";
test.describe("How to handle drag and drop", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext();
        page = await context.newPage();
    })
    test("my test", async () => {
        await page.goto("https://letcode.in/droppable")
        const src = await page.$("#draggable");
        const des = await page.$("#droppable");
        if (src && des) {
            const srcBound = await src.boundingBox()
            const desBound = await des?.boundingBox()
            if (srcBound && desBound) {
                await page.mouse.move(srcBound.x + srcBound.width / 2)
                await page.mouse.down();
                await page.mouse.move(srcBound.y + srcBound.width / 2)
                await page.mouse.down();
            } else {
                throw new Error("No Element")
            }

        }
    })
})