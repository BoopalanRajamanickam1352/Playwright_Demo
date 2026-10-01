class Person {

    age = 25;

    get location() {
        return "Canada";
    }

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    fullname() {
        return this.firstname + " " + this.lastname;
    }
}

let per = new Person("Timroot", "Garry");

console.log(per.age);
console.log(per.location);
console.log(per.fullname());

module.exports = Person;