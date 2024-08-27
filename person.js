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
const person = new Person("Nazmul", "Hassan");
console.log(person.fullName);
person.fullName = "nazmul";
console.log(person.fullName);
