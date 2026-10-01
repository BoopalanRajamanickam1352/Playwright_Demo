class Employee {

    readonly _name: string;
    _age: number = 0;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get age() {
        console.log("Getter Called")
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get name() {
        return this._name;
    }
}

const employee: Employee = new Employee('Anto', 30);
console.log(employee.age)
console.log(employee.name)

