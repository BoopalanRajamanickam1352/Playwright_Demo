const { test, expect } = require('@playwright/test');
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator('#userEmail').fill("anshika@gmail.com");
    await page.locator('#userPassword').fill("Iamking@000");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');

});

test("update user", async ({ request }) => {

})