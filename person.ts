class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName(): string {
		return this.firstName + " " + this.lastName;
	}
}

const person = new Person("Nazmul", "Hassan");

console.log(person.fullName);
