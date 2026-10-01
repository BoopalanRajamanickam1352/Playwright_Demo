const { test, expect } = require('@playwright/test')

test("Popup Validation ", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("https://www.google.com");
    //await page.goBack();
    //await page.goForward();
    expect(await page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    expect(await page.locator('#displayed-text')).toBeHidden();


    page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.locator('#mousehover').hover();

    const framePage = page.frameLocator('#courses-iframe');
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    const textBox = await framePage.locator('.text h2').textContent();
    console.log(textBox.split(" ")[1]);

})