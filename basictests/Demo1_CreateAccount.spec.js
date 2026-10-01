const { test } = require('@playwright/test')

test.only('create account', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    /*   await page.locator(".text-reset").click();
       await page.locator("#firstName").fill("Test");
       await page.locator("#lastName").fill("Account");
       await page.locator("#userEmail").fill("testaccount_2@gmail.com");
       await page.locator("#userMobile").fill("9999999999");
       await page.locator("[value='Male']").click();
       await page.locator("#userPassword").fill("Apple@123");
       await page.locator("#confirmPassword").fill("Apple@123");
       await page.locator("[type='checkbox']").click();
       await page.waitForTimeout(10000);
       await page.locator("#login").click();
       await page.waitForTimeout(5000);
       console.log(await page.locator(".headcolor").first().textContent());
   
       await page.locator("button[_ngcontent-mrf-c32]").click();
       await page.waitForTimeout(5000);
   */
    await page.locator("#userEmail").fill("testaccount_2@gmail.com");
    await page.locator("#userPassword").fill("Apple@123");

    await page.locator("#login").click();
    await page.waitForTimeout(5000);
    await page.locator(".card-body b").first().waitFor(); //alternate way
    await page.waitForLoadState('networkidle');
    const allItems = await page.locator(".card-body b").allTextContents();
    console.log(allItems);






});