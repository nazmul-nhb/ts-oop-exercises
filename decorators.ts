// function Component(constructor: Function) {
// 	console.log("Component decorator called");
// 	constructor.prototype.uniqueID = Date.now();
// 	constructor.prototype.insertInDOM = () => {
// 		console.log("Inserting the Component in the DOM...");
// 	};
// }

type ComponentOptions = {
	selector: string;
};

function Component(options: ComponentOptions) {
	return (constructor: Function) => {
		console.log("Component decorator called");
		constructor.prototype.options = options;
		constructor.prototype.uniqueID = Date.now();
		constructor.prototype.insertInDOM = () => {
			console.log("Inserting the Component in the DOM...");
		};
	};
}

interface ComponentInstance {
	options: ComponentOptions;
	uniqueID: number;
	insertInDOM: () => void;
}

@Component({ selector: "#myProfile" })
class ProfileComponent {}

const profile = new ProfileComponent() as ComponentInstance;
profile.insertInDOM();
console.log(profile.options);
console.log(profile.uniqueID);
