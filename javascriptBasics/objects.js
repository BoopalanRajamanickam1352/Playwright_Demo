//object is a collection of properties
let person = {
    firstname: 'jj',
    lastname: 'kk',
    age: 44,
    fullname: function () {
        console.log(this.firstname + this.lastname)
    }


}
console.log(person.lastname)
console.log(person['lastname'])
person.firstname = 'tim'
console.log(person.firstname)

person.gender = 'male'
console.log(person.gender)
delete person.gender
console.log(person.gender)

console.log('gender' in person)
for (let key in person) {
    console.log(person[key])
}

console.log(person.fullname())