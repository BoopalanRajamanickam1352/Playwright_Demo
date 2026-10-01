const Person = require('./classes');
let day = 'Tuesday '
console.log(day.length)
console.log(day.trim().length)

let subday = day.slice(0, 4)
console.log(subday)

console.log(day[1])

let splitday = day.split("s")
console.log(splitday[0])

let date = '23'
let nextdate = '27'
let diff = parseInt(date) - parseInt(nextdate)
console.log(diff)
console.log(diff.toString())

let newQuote = day + "is funday"
console.log(newQuote)

let val = newQuote.indexOf("day", 5)
console.log(val)


let person3 = new Person("Timmy", "Garry")
console.log(person.age)
console.log(person.location)
console.log(person.fullname())

