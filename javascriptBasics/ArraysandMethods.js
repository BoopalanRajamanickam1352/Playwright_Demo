var marks = Array(6)
var marks = new Array(10, 20, 30, 40, 50, 60)

var marks = [10, 20, 30, 40, 50, 60]
console.log(marks)
console.log(marks[3])
marks[3] = 99
console.log(marks)
console.log(marks.length)
marks.push(65)
console.log(marks)
marks.pop()
marks.unshift(12)
console.log(marks)
console.log(marks.indexOf(20))
console.log(marks.includes(120))

var sum = 0
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
    console.log(sum)
}
console.log(sum)

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

let total = marks.reduce((sum, mark) => sum + mark, 0)
console.log(total)

console.log("@@@@@@@@@@@")
var scores = [10, 12, 14, 16, 15, 13, 18, 17, 19]
var evenscore = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenscore.push(scores[i])
    }
}
console.log(evenscore)

console.log("^^^^^^^^^^^^^")
let newscoress = scores.filter(score => score % 2 == 0)
console.log(newscoress)

console.log("************")
let mappedarray = newscoress.map(score => score * 3)
console.log(mappedarray)
let totalval = mappedarray.reduce((sum, val) => sum + val, 0)
console.log(totalval)

//Important chain up all together
var scores1 = [12, 13, 14, 15, 16, 17]
let sumValue = scores1.filter(score => score % 2 == 0).map(score => score * 3).reduce((sum, val) => sum + val, 0)
console.log(sumValue)

let fruits = ["Apple", "Orange", "Banana"]
console.log(fruits.sort())

let scores7 = [11, 15, 95, 45, 16, 14, 19, 32]
console.log(scores7.sort((a, b) => a - b))
console.log(scores7.sort((a, b) => b - a))

