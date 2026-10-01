//framelocator() is used to switch to frame 

const { test, expect } = require('@playwright/test')
test('handling frames', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.frameLocator('#courses-iframe').getByRole('link', { name: 'Courses' }).first().click();
    await page.pause()
})