const { test, expect } = require('@playwright/test');

test('First testcase', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com")
});

test('Page playwright test', async ({ page }) => {
    const userName = page.locator('#username');
    const passWord = page.locator('#password');
    const logIn = page.locator("[type='submit']");
    const cardTitle = page.locator(".card-body a");


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await userName.fill("Boopalan");
    await passWord.fill("Boopalan");
    await logIn.click();

    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");

    await userName.fill("rahulshettyacademy");
    await passWord.fill("Learning@830$3mK2");
    await logIn.click();
    console.log(await cardTitle.first().textContent())

    const allTitle = await cardTitle.allTextContents()
    console.log(allTitle)


});
