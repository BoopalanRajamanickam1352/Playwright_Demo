const { test, expect } = require('@playwright/test');

test('QA Practice Demo site', async ({ page }) => {
    //values#
    const url = "https://eventhub.rahulshettyacademy.com/login";
    const username = "sample@gmail.com";
    const password = "Sample@123";
    const eventToBook = "Dilli Diwali Mela";

    //step 1 #Register account
    await page.goto(url);
    await page.getByRole('link', { name: "Register" }).click();
    await page.getByTestId('register-email').fill(username);
    await page.getByTestId('register-password').fill(password);
    await page.getByPlaceholder('Repeat your password').fill(password);
    await page.getByTestId('register-btn').click();
    await page.getByText('Email already registered').waitFor();
    //    expect(await page.getByText('Email already registered')).toBeVisible();
    await page.getByText('Sign in').click();

    //Login page
    await page.getByRole('textbox', { name: 'Email' }).waitFor({ state: 'visible' });
    await page.getByRole('textbox', { name: 'Email' }).fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();

    //Home page
    const homepageAccount = await page.getByTestId('user-email-display').textContent();
    expect(homepageAccount).toBe(username);
    const eventDetails = page.locator('#event-card .p-4');
    await eventDetails.first().waitFor({ state: 'visible' });
    const eventCount = await eventDetails.count();

    for (let i = 0; i < eventCount; i++) {
        const event = await eventDetails.nth(i);
        const eventName = await event.locator('h3');
        const eventSeatCount = await event.locator('.text-xs');
        const seatText = await eventSeatCount.textContent();
        const beforeBookNow = Number(seatText?.match(/\d+/)?.[0]);
        const eventBookNow = await event.locator('#book-now-btn');
        if ((await eventName.textContent())?.trim() === eventToBook) {
            await eventBookNow.click;
            const afterBookNow = await beforeBookNow;
            if (afterBookNow === (beforeBookNow - 1)) {
                console.log("Success")
            }
        }

    }

    await page.pause();
});