const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');

test('Dropdown', async ({ page }) => {
    const userName = page.locator('#username');
    const passWord = page.locator('#password');
    const logIn = page.locator("[type='submit']");

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink = page.locator("[href*='documents-request']");
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await userName.fill("Boopalan");
    await passWord.fill("Boopalan");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator("span.checkmark").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator("span.checkmark").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    //await expect(page.locator("#terms").isChecked()).toBeFalsy();
    //   await page.pause();
    await expect(documentLink).toHaveAttribute("class", "blinkingText")

});

test.only('@child windows handling', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator('#username');
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
    ]);
    const text = await newPage.locator(".red").textContent();
    console.log(text);
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    //console.log(domain);
    await page.locator("#username").fill(domain);
    await page.pause();
    console.log(await page.locator("#username").inputValue());

}) 