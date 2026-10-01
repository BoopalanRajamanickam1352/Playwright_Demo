const { test, expect } = require('@playwright/test');

test('E2E UI Americangirl Create Account', async ({ page }) => {
    const firstName = "B";
    const lastName = "R";
    const email = "ag0207.test+playwrighttwo@gmail.com";
    //    const password = "Apple@123";
    const month = "01";
    const day = "01";
    const year = "1990";
    await page.goto("https://test-www.americangirl.com/password?password=Trulyme123!");
    await page.getByText('Accepter Tout').click();
    await page.getByText('Fermer').click();
    const title = await page.title();
    await expect(title).toContain("American Girl");
    await page.locator('span:has-text("Sign in or join")').first().click();
    await page.locator('button:has-text("Join for free")').first().click();
    const pageTitle = await page.locator("div[title='Create account']").textContent();
    console.log(pageTitle);

    await page.locator('[id="1-first_name"]').fill(firstName);
    await page.locator('[id="1-last_name"]').fill(lastName);
    await page.locator('[id="1-email"]').fill(email);
    await page.locator('[id="1-password"]').fill(password);
    await page.locator('[id="1-month"]').fill(month);
    await page.locator('[id="1-day"]').fill(day);
    await page.locator('[id="1-year"]').fill(year);
    const terms = page.locator('[id="1-terms"]');
    if (!(await terms.isVisible())) {
        await terms.click();
    }
    await page.locator('[id="1-submit"]').click();

    const mailConfirm = await page
        .locator('span.login-drawer__create-email.js-drawer-verify-email');
    console.log("Expected:", email);
    console.log("Actual:", await mailConfirm.textContent());

    await expect(mailConfirm).toContainText(email);

    await page.locator('[class="icon icon--chevron-left-gray"]').click();
    console.log(await page.title());
});

test('Itembean Placing order', async ({ page, context }) => {
    await context.clearCookies();
    const email = "ag0207.test+playwrighttwo@gmail.com";
    const password = "Mattel@007";
    await page.goto("https://test-www.americangirl.com/password?password=Trulyme123!");
    await page.getByText('Accepter Tout').click();
    await page.getByText('Fermer').click();
    const title = await page.title();
    await expect(title).toContain("American Girl");
    await page.locator('span:has-text("Sign in or join")').first().click();

    await page.locator('[id="1-email"]').fill(email);
    await page.locator('[id="1-password"]').fill(password);
    await page.locator('[id="1-submit"]').click();
    await page.locator('button.collect-phone__header-close').first().click();

    await page.locator('.js-search-toggle').click();
    await page.locator('#searchInput').fill("BKF83");
    await page.locator('#searchInput').press('Enter');


    const quickAdd = await page.locator('.product-item__quick-shop-button').first();
    const quickAddButton = await quickAdd.textContent();
    const filterPLP = await page.locator('button.btn-icon.collection-top__btn');
    console.log("PLP Filter", filterPLP.innerText());
    await expect(quickAddButton).toContain('Quick add');
    await quickAdd.click();
    await expect(quickAdd).not.toHaveText('Adding...');

    await expect(page.locator('.bag-mini__header-text')).toBeVisible();
    await expect(page.locator('.bag-mini__header-text')).toContainText('Added to your bag');

    await expect(page.locator('.js-bag-checkout')).toBeVisible();
    await expect(page.locator('.js-bag-checkout')).toContainText("Checkout");
    await page.locator('.icon--close-solid-black').first().click();

    await page.locator('.product-item__title').first().click();
    console.log(await page.title());

    const PDPTitle = await page.locator('.pv-title.js-product-title').innerText();

    const addToBag = page.locator('#btnAddToBag').first();
    const actualText = await addToBag.innerText();
    await expect(actualText).toContain('Add to bag');
    await addToBag.click();

    //cartPage validation
    await page.waitForLoadState('domcontentloaded');
    const cartURL = await page.url();
    expect(cartURL).toContain('cart');

    const cartProduct = await page.locator('.bag-item__title').first();
    const cartProductTitle = await cartProduct.textContent();
    expect(cartProductTitle.slice(0, 30)).toContain(PDPTitle.slice(0, 30));

    const checkoutButton = await page.locator('.bag__checkout.js-bag-checkout').last();
    await expect(checkoutButton).toContainText('Checkout');
    await checkoutButton.click();

    //checkout page
    await page.waitForLoadState('domcontentloaded');
    await page.locator('#email').waitFor({ state: 'visible' });
    await page.locator('#email').fill(email);
    console.log("success");
    await page.locator("#TextFieldP0-63").fill("Test");
    await page.locator("#TextFieldP0-64").fill("Test");
    const addressDropdown = await page.locator("[placeholder='Address']");
    addressDropdown.pressSequentially("100a");
    addressDropdown.waitFor();
    addressDropdown.locator("[id='TextFieldP0 - 75']").click();




    console.log("success");

    await page.pause();

});

test('Cartpage to Checkoutpage', async ({ page, context }) => {
    await page.goto("https://vinothqaacademy.com/drop-down/");
    await page.waitForLoadState('domcontentloaded');
    console.log(await page.locator('.select2-search__field').count());
    const dropdown = await page.locator('.select2-search__field').pressSequentially("Jav", { delay: 550 });


    const options = page.locator("ul.select2-results__options li");
    const count = await options.count();
    console.log("Count:", count);

    for (let i = 0; i <= count; i++) {
        const text = await options.locator("li").nth(i).textContent();
        console.log(text);
    }

})

