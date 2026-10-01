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

    console.log("*********Delete Booking***********")
    const deleteresponse = await request.delete(`https://restful-booker.herokuapp.com/booking/${createbookingid}`,
        {
            headers: {
                "Content-Type": "application/json",
                "cookie": `token=${putresponsetoken}`
            }
        }
    );
    console.log(deleteresponse.status())
    expect(deleteresponse.status()).toBe(201);

    const getresponse = await request.get(`https://restful-booker.herokuapp.com/booking/${createbookingid}`)
    console.log(getresponse.status())
    console.log(getresponse.statusText())



})