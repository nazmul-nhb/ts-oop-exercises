// Convert the function below to a generic function:
// function echo(arg) {
// 	return arg;
// }

function echo<T>(arg: T): T {
	return arg;
}

// When compiling the following piece of code, we get an error saying ‘Property name does not exist on type T’. How can we solve this problem?

function printName<T extends { name: string }>(obj: T) {
	console.log(obj.name);
}
