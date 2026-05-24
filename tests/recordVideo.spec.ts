import { test, expect, chromium } from '@playwright/test';
test.describe('Record Video', () => {

    test('Record Video', async () => {
        const browser = await chromium.launch()
        const context = await browser.newContext({
            recordVideo: {
                dir: "./videos/",
                size: {
                    width: 800,
                    height: 600
                }
            }
        });
        const page = await context.newPage()
        await page.goto('https://practicetestautomation.com/practice-test-login/')

        await context.close()
        await page.close()


    })
})