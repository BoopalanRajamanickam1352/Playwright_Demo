"use strict";
class Employee {
    _name;
    _age = 0;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get age() {
        console.log("Getter Called");
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
}
const employee = new Employee('Anto', 30);
console.log(employee.age);
console.log(employee.name);
