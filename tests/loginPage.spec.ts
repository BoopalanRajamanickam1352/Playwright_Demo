import { test, expect, chromium } from '@playwright/test';
test.describe('Login page', () => {

    test('Login', async () => {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto('https://practicetestautomation.com/practice-test-login/')
        await page.fill("input[name='username']", 'student');
        await page.fill("input[type='password']", 'Password123');
        await page.click("text=Submit");
        await page.click("text=Log out");

        await page.close()

    })

})