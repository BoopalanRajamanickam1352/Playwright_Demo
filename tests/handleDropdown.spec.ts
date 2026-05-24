import test, { Browser, BrowserContext, chromium, ElementHandle, expect, Page } from "@playwright/test"
test.describe("How to handle Dropdown", async () => {
    let browser: Browser
    let context: BrowserContext
    let page: Page
    test.beforeAll("Before all test", async () => {
        browser = await chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://letcode.in/dropdowns")
    })

    test("select a dropdown based on value", async () => {
        const fruits = await page.$("#fruits");
        await fruits?.selectOption("3");
        const msg = await page.$("//div[@class='notification is-success']//p[1]");
        if (msg) {
            expect(await msg.textContent()).toContain("Banana")
        }
    })

    test("select multiple", async () => {
        const heros = await page.$("#superheros");
        heros?.selectOption([
            { label: "Aquaman" }, { value: "bt" }, { index: 8 }])
    })

    test("count the elements in dropdown", async () => {
        const lang = await page.$$("#lang option")
        console.log(lang.length)
    })

    test("get selected text", async () => {
        //await page.selectOption("#country", {index: 2})
        const text = await page.$eval<string, HTMLSelectElement>("#country", ele => ele.value);
        console.log(text);
    })

})
