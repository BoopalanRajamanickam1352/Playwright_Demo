const { test, expect } = require('@playwright/test');
const { request } = require('node:http')
const authdata = {
    "username": "admin",
    "password": "password123"
}

test('post call request', async ({ request }) => {
    const postresponse = await request.post("https://restful-booker.herokuapp.com/auth", {
        headers: { "Content-Type": "application/json" },
        data: authdata
    })
    console.log("******** Response json**************")
    console.log(postresponse.status())
    const postresponsebody = await postresponse.json();
    console.log(postresponsebody)
    expect(postresponse.token).not.toBeNull();

})

test.only('post call request with bookingID', async ({ request }) => {
    const bookingdata = {
        "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }
    const postresponse = await request.post("https://restful-booker.herokuapp.com/booking", {
        headers: { "Content-Type": "application/json" },
        data: bookingdata
    })
    const postresponsejson = await postresponse.json()
    console.log("******** Response json**************")
    console.log(postresponsejson)
    console.log("******** Response status**************")
    console.log(postresponse.status())
    console.log("******** Response validation**************")
    expect(postresponse.bookingid).not.toBeNull()
})