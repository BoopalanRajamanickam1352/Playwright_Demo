let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);

let str1 = "Hello World"
let reversed1 = str1.split(" ").reverse().join(" ");
console.log(reversed1)

const text = "Playwright"
let reverse = ""
for (let i = text.length - 1; i >= 0; i--) {
    reverse += text[i];
} console.log(reverse);

const text1 = "playwright texting example"
const words = text1.split(" ")
let reverse1 = ""
for (let i = text1.length - 1; i >= 0; i--) {
    reverse1 += text1[i] + " "
} console.log(reverse1)