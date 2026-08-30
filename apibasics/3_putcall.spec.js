const { test, expect } = require('@playwright/test')
const { request } = require('node:http')
test('put call request', async ({ request }) => {
    const authdata = {
        "username": "admin",
        "password": "password123"
    }
    const putresponse = await request.post("https://restful-booker.herokuapp.com/auth", {
        headers: {
            "Content-Type": "application/json"
        }, data: authdata
    })
    const putresponsejson = await putresponse.json()
    console.log(putresponsejson)
    console.log("*********Response Token***********")
    const putresponsetoken = await putresponsejson.token
    console.log(putresponsetoken)

    console.log("*********Create Booking***********")
    const createbooking = {
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
    const putpostresponse = await request.post("https://restful-booker.herokuapp.com/booking",
        {
            headers: { "Content-Type": "application/json" }, data: createbooking
        })
    const putpostresponsejson = await putpostresponse.json()
    console.log(putpostresponsejson)
    console.log("*********Booking ID***********")
    const createbookingid = await putpostresponsejson.bookingid
    console.log(createbookingid)
    console.log(await putpostresponse.json())

    console.log("*********Booking - UpdateBooking***********")

    const updatebookingdata = {
        "firstname": "James",
        "lastname": "Bond",
        "totalprice": 800,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }
    const updatedresponse = await request.put(`https://restful-booker.herokuapp.com/booking/${createbookingid}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Cookie": `token=${putresponsetoken}`
            }, data: updatebookingdata
        })

    expect(updatedresponse.status()).toBe(200);
    console.log("URL:", updatedresponse.url());
    console.log("Status:", updatedresponse.status());
    console.log("Body:", await updatedresponse.text());
    const updatedresponsejson = await updatedresponse.json()
    console.log(updatedresponsejson)



})

