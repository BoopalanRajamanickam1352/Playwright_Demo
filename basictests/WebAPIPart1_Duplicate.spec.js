const { test, expect, request } = require('@playwright/test')
const { APIutils } = require('./utils/APIUtils');
let token;
let orderID;

test.beforeAll(async () => {

    //Login API

    const APIContext = await request.newContext();
    const APIUtils = new APIutils(apicontext, loginPayload);
    APIUtils.createOrder(orderPayload);

    //order placing
})

test('API testing part 1', async ({ page }) => {


    const productName = 'ZARA COAT 3';
    const email = "anshika@gmail.com";

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token)

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.getByRole('button', { name: "ORDERS" }).click();

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