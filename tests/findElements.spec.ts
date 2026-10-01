import test, { Browser, BrowserContext, chromium, ElementHandle, expect, Page } from "@playwright/test"
test.describe("search GIT Repo", () => {

    let browser: Browser
    let context: BrowserContext
    let page: Page
    test.beforeAll("Before all test", async () => {
        browser = await chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://letcode.in/elements")
    })

    test("Enter Git username", async () => {
        const ele = await page.$("input[name='username']")
        await ele?.fill("ortonikc")
        await ele?.press("Enter")
    })

    test("print all the repos", async () => {
        await page.waitForSelector("app-learning-point ol li", { timeout: 5000 })
        const repos = await page.$$("app-learning-point ol li")
        console.log(repos.length)

        for await (const repo of repos) {
            console.log(await repo.innerText())
        }

        const allurl = await Promise.all(repos.map(async (repo, i) => {
            return await repo.innerText()
        }))
        console.log(allurl);
    })

})