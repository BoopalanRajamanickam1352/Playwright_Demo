const { test, expect } = require("@playwright/test")
test("HealthCheck API call", async ({ request }) => {
    test.setTimeout(0)
    while (true) {
        const starttime = Date.now();
        const getresponse = await request.get("https://restful-booker.herokuapp.com/ping")
        const endtime = Date.now();
        const time = endtime - starttime
        if (time > 2000) {
            throw new Error(`API is slow ${time}`)
        } else {
            console.log(`total duration time : ${time}`)
        }
        const getstatus = await getresponse.status()
        console.log(`Response code from API ${getstatus}`)
        expect(getstatus).toBe(201);
    }
})