interface Employee {
	name: string;
	salary: number;
	address: Address;
}

interface Address {
	street: string;
	city: string;
	zipCode: number;
}

let employee2 = {
	name: "John Smith",
	salary: 50_000,
	address: {
		street: "Flinders st",
		city: "Melbourne",
		zipCode: 3144,
	},
};
