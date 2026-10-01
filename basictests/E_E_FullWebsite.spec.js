const { test, expect } = require('@playwright/test');

test('E2E UI Automation', async ({ page }) => {

    const productName = 'Nokia Edge';

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#terms").click();
    await page.locator("#signInBtn").click();

    await page.locator(".card-body h4 a").first().waitFor();

    const products = page.locator(".card-body");
    const count = await products.count();

    for (let i = 0; i < count; i++) {
        const title = await products.nth(i).locator("a").textContent();
        if (title?.trim() === productName) {
            console.log("Found:", title);
            await products.nth(i).locator("~.card-footer .btn").click();
            break;
        }
    }

    //Checkout after adding product
    await page.locator("a:has-text('Checkout')").click();
    await page.locator(".media-body").first().waitFor();
    const bool = await page.getByText(productName).isVisible();
    expect(bool).toBeTruthy();
    //clicking checkout button
    await page.locator(".btn").last().click();

});