"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
// const person = new Person("Nazmul", "Hassan");
// console.log(person.fullName);
class Employee extends Person {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    get details() {
        return `${this.fullName} receives ${this.salary} taka per month!`;
    }
}
const employee = new Employee("Obaidul", "Quader", 1971);
console.log(employee.details);
