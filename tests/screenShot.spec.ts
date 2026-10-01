import test, { Page, chromium, Browser, BrowserContext } from "@playwright/test"
test.describe("Handle Screenshot", async () => {
    let browser: Browser
    let context: BrowserContext
    let page: Page
    test.beforeAll("Before all test", async () => {
        browser = await chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://letcode.in/frame")
    })

    test("Interact with frame", async () => {
        const header = await page.$("#navbar-menu")
        header?.screenshot({ path: `screenshots/header.png` });
        const frame = page.frame({ name: "firstFr" })
        if (frame != null) {
            await frame?.fill("input[name='fname']", "Kousik")
            await frame?.fill("input[name='lname']", "Chat")
            console.log(page.title())
            await page.screenshot({
                path: `screenshots/fs.png`,
                fullPage: true
            });

        }
    })
    test.afterEach(async () => {
        await page.screenshot({
            path: `screenshots/${Date.now()}-screenshot.png`
        })
    });
    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    })
})


