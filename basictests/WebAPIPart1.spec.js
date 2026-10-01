const { test, expect, request } = require('@playwright/test')
const loginPayload = {
    userEmail: "anshika@gmail.com",
    userPassword: "Iamking@000"
};
const orderPayload = {
    orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }]
}
let token;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data: loginPayload
        }
    );
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJSON = await loginResponse.json();
    token = loginResponseJSON.token;
    console.log(token);
    await apiContext.dispose();

    await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
            data: orderPayload,
            Headers: {
                'Authorization': token,
                'content-type': 'application/json'

            },

        })
    const orderResponseJSON = await orderResponse.json();
    console.log(orderResponseJSON);
    orderID = orderResponseJSON.orders[0];


});

test.beforeEach(() => {

})

test('API testing part 1', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);
    const productName = 'ZARA COAT 3';
    const email = "anshika@gmail.com";

    await page.goto("https://rahulshettyacademy.com/client/");
    // await page.getByPlaceholder("email@example.com").fill(email);
    // await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
    // await page.getByRole('button', { name: "Login" }).click();
    // await page.waitForLoadState('networkidle');

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