const Person = require('./classes');
class Pet extends Person {
    get location() {
        return "Bluecross"
    }
    constructor(firstname, lastname) {
        super(firstname, lastname)
    }

}
let pet = new Pet("sam", "sam")
pet.fullname
console.log(pet.location)