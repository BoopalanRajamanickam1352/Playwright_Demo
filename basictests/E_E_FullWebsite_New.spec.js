const { test, expect } = require('@playwright/test');


test('E2E Automation using new method', async ({ page }) => {
    const productName = 'ZARA COAT 3';
    const email = "anshika@gmail.com";


    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
    await page.getByRole('button', { name: "Login" }).click();
    await page.waitForLoadState('networkidle');

    await page.locator(".card-body b").first().waitFor();

    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" })
        .getByRole('button', { name: " Add To Cart" }).click();
    await page.getByRole("listitem").getByRole('button', { name: "Cart" }).click();

    await expect(page.getByText("ZARA COAT 3")).toBeVisible();
    await page.getByRole("button", { name: 'Checkout' }).click();

    await page.getByPlaceholder("Select Country").pressSequentially("IND");
    await page.getByRole('button', { name: "India" }).nth(1).click();
    await page.getByText("PLACE ORDER").click();


})
