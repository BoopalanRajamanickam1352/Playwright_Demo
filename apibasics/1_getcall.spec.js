const { test, expect } = require('@playwright/test')

test('get call request', async ({ page, request }) => {
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1")
    const responsebody = await response.body();
    console.log(responsebody);
    console.log("******** Response json**************")
    const responsejson = await response.json()
    console.log(responsejson);
    console.log("******** Response Headers**************")
    const responseheaders = response.headers()
    console.log(responseheaders)
    console.log("******** Response Headers Array**************")
    const responseheadersarray = response.headersArray()
    console.log(responseheadersarray)
    console.log("********Response Status**************")
    const responsestatus = response.status()
    console.log(responsestatus)
    console.log("********Response Status Text**************")
    const responsestatustext = response.statusText()
    console.log(responsestatustext)
    console.log("********Response Status expect**************")
    expect(responsestatus).toBe(200)
    expect(responsestatustext).toBe("OK")
    expect(response.ok()).toBeTruthy()
    expect(responsejson).toHaveProperty("userId", 1)
    expect(responsejson).toHaveProperty("id", 1)
    expect(responsejson.body).toContain("quia et suscipit")







})