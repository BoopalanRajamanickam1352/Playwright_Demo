const { test, expect } = require('@playwright/test');
const { request } = require('node:http');
var userID

// test.only("Get users", async ({ request }) => {
//     const response = await request.get('https://jsonplaceholder.typicode.com/users');
//     console.log(await response.json());
//     expect(response.status()).toBe(200);

// });

test.only('Create user', async ({ request }) => {

    const response = await request.post(
        'https://reqres.in/api/users',
        {
            headers: {
                'Accept': 'application/json',
                'x-api-key': 'process.env.REQRES_API_KEY'
            },
            data: {
                name: 'Sam',
                job: 'QA Engineer'
            }
        }
    );
    //    expect(response.status()).toBe(201);
    const body = await response.json();
    console.log(body);
    expect(body.name).toBe('Sam');
    expect(body.job).toBe('QA Engineer');
    var userID = await body.id
});

test("update user", async ({ request }) => {

})

test("delete user", async ({ request }) => {

})