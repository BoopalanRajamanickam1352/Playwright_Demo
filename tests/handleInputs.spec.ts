import { test, chromium, Browser, BrowserContext, Page } from "@playwright/test";
test.describe("Learn how to handle inputs", async () => {

    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
    test.beforeAll(async () => {
        browser = await chromium.launch()
        const context = await browser.newContext({
            recordVideo: {
                dir: "./videos/",
                size: {
                    width: 800,
                    height: 600
                }
            }
        });
        page = await context.newPage()
        await page.goto("https://letcode.in/edit")
    })

    test("Enter your full name", async () => {
        const name = await page.$("#fullName")
        await name?.fill("Kousik")
    })

    test("Append a text and press keyboard tab", async () => {
        const join = await page.$('#join')
        await join?.focus();
        await page.keyboard.press("End")
        await join?.type("Human")
    })

    test("what is inside the textbox", async () => {
        const text = await page.getAttribute("#getMe", "value");
        console.log(text);
    })

    test("clear the text", async () => {
        const clear = await page.fill("//input[@value='Koushik Chatterjee']", "")
    })

    test.afterAll(async () => {
        await page.close();
        await browser.close();
    });

})