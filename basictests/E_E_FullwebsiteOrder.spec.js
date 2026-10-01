const { test, expect } = require('@playwright/test');

test('Testsite Placing order', async ({ page, context }) => {
    await context.clearCookies();
    const email = "testaccount_2@gmail.com";
    const password = "Apple@123";
    const product = "ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.locator('[id="userEmail"]').fill(email);
    await page.locator('[id="userPassword"]').fill(password);
    await page.locator('[id="login"]').click();


    const products = await page.locator(".card-body");
    await products.first().waitFor();
    const productsCount = await products.count();

    for (let i = 0; i <= productsCount; ++i) {
        const productName = await products.nth(i).locator("h5 b").textContent();
        if (productName?.trim() === product) {
            await products.nth(i)
                .getByRole("button", { name: "Add To Cart" })
                .click();
            break;
        }
    }
    //moving to cart page 
    await page.locator(".fa-shopping-cart").first().click();
    const myCart = await page.locator("h1:has-text('My Cart')");
    //    myCart.waitFor({ state: 'visible' });
    await expect(myCart).toHaveText("My Cart");
    await page.locator("button:has-text('Checkout')").click();

    //payment menthod page
    await page.getByPlaceholder("Select Country").pressSequentially("IND", { delay: 150 });
    const optionList = page.locator('.ta-results');
    await optionList.waitFor();
    const optionCount = await optionList.locator("button").count();
    for (let i = 0; i < optionCount; i++) {
        const text = await optionList.locator("button").nth(i).textContent();
        if (text === " India") {
            await optionList.locator("button").nth(i).click();
            break;
        }
    }
    await page.locator(".action__submit ").click();

    //Thank you page
    const orderConfirmation = await page.locator(".hero-primary").textContent();
    console.log(orderConfirmation);
    await expect(orderConfirmation).toBe(" Thankyou for the order. ");
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderID);

    //orderPage
    const orderHistoryPage = page.locator("label[routerlink*='myorders']");
    await orderHistoryPage.click();
    const rows = page.locator("tbody tr");
    await rows.first().waitFor({ state: "visible" });
    const tableRowCount = await rows.count();
    console.log(tableRowCount);

    for (let i = 0; i < tableRowCount; i++) {
        const tableRow = await rows.nth(i).locator("th").textContent();
        if (orderID.includes(tableRow?.trim())) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }


    //    console.log(myCart.textContent());
    console.log("success");
    await page.pause();

});