// const flag = true;
// if (!flag) {
//     console.log("True")
// }
// else {
//     console.log("false")
// }

// let i = 0;
// while (i <= 10) {
//     i++
//     console.log(i);
// }

// do {
//     i++
// } while (i > 10)
// {
//     console.log(i)
// }

console.log("***********************")

//from 1 to 10 give me common multiple values of 2 and 5
let n = 0
for (let k = 0; k <= 100; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        n++
        console.log(k);
        if (n == 3) {
            break
        }
    }
}