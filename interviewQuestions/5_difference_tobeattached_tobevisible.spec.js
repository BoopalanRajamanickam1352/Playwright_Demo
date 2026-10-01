// tobeattached() - element exist in DOM(could be hidden via css, off-screen, visiblity:hidden or zero capacity)
//isVisible() checks visibility once, immediately, and returns true/false. 
//toBeVisible() is an assertion that waits and retries until the element becomes visible
//toBeHidden() Checks that an element is hidden.
//toContainText() Checks whether an element contains some text.
//toHaveValue() Used for input fields

const { test, expect } = require('@playwright/test')
test('handling frames', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('.radioButton').first()).toHaveValue('radio1');
    await expect(page.getByRole('radio').first()).toBeChecked();
    const iframe = await page.frameLocator('#courses-iframe');
    const course = await iframe.getByRole('link', { name: 'Courses' }).first();
    console.log(await course.isVisible()); //checks visibility once, immediately, and returns true/false
    await expect(course).toBeVisible(); //assertion that waits and retries until the element becomes visible     
    //    await expect(course).toBeHidden();  //Checks that an element is hidden.
    await expect(course).toHaveText('Courses');
    await expect(course).toContainText(/cour/i); //Use regex with /i flag for case-insensitive match


    console.log("success")
    await page.pause()
})