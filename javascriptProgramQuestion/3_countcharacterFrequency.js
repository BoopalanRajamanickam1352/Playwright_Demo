const text = "hello"
let count = {}

for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }
}
console.log(count)