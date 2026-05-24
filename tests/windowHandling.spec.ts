import test, { Browser, BrowserContext, chromium, ElementHandle, expect, Page } from "@playwright/test"
test.describe("How to handle Dropdown", async () => {
    let browser: Browser
    let context: BrowserContext
    let page: Page
    test.beforeAll("Before all test", async () => {
        browser = await chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://letcode.in/window")
    })

    test("Home page", async () => {
        console.log(await page.title())
        expect(await page.title()).toBe("Windows | LetCode with Koushik")
    })

    test("single page handling", async () => {
        const [newWindow] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#home")
        ])
        await newWindow.waitForLoadState()
        //expect(newWindow.click('"Log in"'))
        expect(newWindow.url()).toContain("test")
        await page.bringToFront()
        expect(page.url()).toContain("window")
    })

    test("multipage handling", async () => {
        const [multiPage] = await Promise.all([
            context.waitForEvent("page"),
            await page.click("#multi")
        ])
        await multiPage.waitForLoadState();
        const allWindows = multiPage.context().pages();
        console.log(allWindows.length)
        allWindows.forEach(page => {
            console.log(page.url())
        })
        allWindows[1].on("dialog", (dialog) => {
            console.log('Message: ' + dialog.message())
            dialog.accept()
        })
    })





})