const { test, expect } = require('@playwright/test')

//map() - Use when you want to create a new array.
test("map functionality", async () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.map(number => 2 * number);
    console.log(`Original array:,${numbers}`);
    console.log(result);
}),

    //map() VS forEach()-Use when you want to do something for each item. 

    test("for each map", async () => {
        const names = ["John", "Sam", "Mike"];
        const result = names.map(name => name.toUpperCase())
        console.log(result)

    }),

    test("for each functionality", async () => {
        const names = ["John", "Sam", "Mike"];
        names.forEach(name => {
            console.log(name)
        });
    }),

    //map() VS filter() Selects only items that satisfy a condition.

    test("map functionality for filter", async () => {
        const numbers = [1, 2, 3, 4, 5, 6, 8]
        const result = numbers.map(number => number * 2)
        console.log(result)
        console.log(numbers)

    }),

    test("filter functionality", async () => {
        const numbers = [1, 2, 3, 4, 5, 6, 8]
        const result = numbers.filter(number => number > 2)
        console.log(result)
        console.log(numbers)

    }),

    test("map functionality using filer and uppercase", async () => {
        const products = ["iPhone", "Samsung Phone", "Laptop", "iPad"];
        const result = products.filter(product => product.includes("Phone"));
        console.log(result);

        const results = products.map(product => product.toUpperCase())
        console.log(results);
    }),

    //map() vs find() returns the first matching item.

    test("map with find function", async () => {
        const products = ["iPhone", "Samsung Phone", "Laptop", "iPad"];
        const result = products.find(product => product === "iPad");
        console.log(result);
    }),

    //map() vs includes() - Checks whether something exists. and provide true / false586471

    test("map with include function", async () => {
        const products = ["iPhone", "Samsung Phone", "Laptop", "iPad"];
        const result = products.map(product => product.includes("iPad"));
        console.log(result);
    }),

    //map() vs reduce() is used when you want to turn an entire array into one final value.

    test("Reduce to single value", async () => {
        const prices = [10, 20, 30];
        const result = prices.reduce((sum, price) => {
            return sum + price
        }, 0)

        console.log(result)
    }),

    test("push functionality", async () => {
        const prices = [10, 20, 30];
        prices.push(26)
        console.log(prices)
    })

test("concat functionality", async () => {
    const prices = [10, 20, 30];
    const prices2 = [10, 20, 30];
    console.log(prices.concat(prices2))
})










