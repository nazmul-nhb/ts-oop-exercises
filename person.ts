class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName(): string {
		return this.firstName + " " + this.lastName;
	}
}

// const person = new Person("Nazmul", "Hassan");

// console.log(person.fullName);

class Employee extends Person {
	constructor(firstName: string, lastName: string, public salary: number) {
		super(firstName, lastName);
	}

	get details(): string {
		return `${this.fullName} receives ${this.salary} taka per month!`;
	}
}

const employee = new Employee("Obaidul", "Quader", 1971);

console.log(employee.details);
