class APIutils {
    constructor(apicontext, loginPayload) {
        this.apicontext = apicontext;
        this.loginPayload = loginPayload;
    }
    async getToken() {
        const loginResponse = await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: loginPayload
            }
        )
        const loginResponseJSON = await loginResponse.json();
        token = loginResponseJSON.token;
        console.log(token);
        return token;
    }
    async createOrder() {
        let response = {};
        const orderResponse = await APIContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload,
                headers: {
                    'Authorization': this.getToken,
                    'content-type': 'application/json'
                },
            }
        )
        const orderResponseJSON = await orderResponse.json();
        orderID = orderResponseJSON.orders[0];
        response.orderID = orderID;
        return orderID;

    }
}

module.exports = { APIutils };