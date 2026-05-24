import { test, expect, chromium } from '@playwright/test';
test.describe('Upload Files', async () => {

    const filePath0 = '..\videos\a.webm';
    test.skip('Upload Files', async () => {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage();
        await page.goto('https://www.sendgb.com/');
        await page.setInputFiles("//div[normalize-space(text())='Add File(s)']", [filePath0]);
        await page.close()
    })

    test("Upload using on function", async () => {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto("https://the-internet.herokuapp.com/upload");
        page.on("filechooser", async (filechooser) => {
            await filechooser.setFiles(filePath0)
        })
        await page.click(".example + div#drag-drop-upload", { force: true })
    })
})