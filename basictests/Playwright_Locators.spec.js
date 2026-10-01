import { test, expect } from '@playwright/test';

test('playwright special locators', async ({ page }) => {
    test.setTimeout(60000);
    const slowexpect = expect.configure({ timeout: 5000 });
    page.setDefaultTimeout(5000);
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Employed').click();
    await page.getByLabel('Gender').selectOption("Female");
    await page.getByPlaceholder('Password').fill("Apple");
    await page.getByRole("button", { name: 'Submit' }).click();
    await slowexpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    await page.getByRole("link", { name: 'Shop' }).click();
    //    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({ timeout: 10000 });

    await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("Button").click({ timeout: 5000 });


});