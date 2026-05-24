import test, { Browser, BrowserContext, chromium, ElementHandle, expect, Page } from "@playwright/test"
test.describe("How to handle Dropdown", async () => {
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
        const frame = page.frame({ name: "firstFr" })
        if (frame != null) {
            await frame?.fill("input[name='fname']", "Kousik")
            await frame?.fill("input[name='lname']", "Chat")

            //Inner Frame
            const frames = frame.childFrames()
            console.log("No of frames" + frames.length)
            if (frames != null)
                await frames[0].fill("input[name='email']", "kousik@mail.com")
            else {
                console.log("Wrong Frame")
            }
            await frame?.fill("input[name='lname']", "lastname changed")
            //another way to reach parent frame   
            const parent = frames[0].parentFrame()
            await parent?.fill("input[name='lname']", "another way changed")
        } else throw new Error("No such frame");

    })

})