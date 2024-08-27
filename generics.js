"use strict";
// Convert the function below to a generic function:
// function echo(arg) {
// 	return arg;
// }
function echo(arg) {
    return arg;
}
// When compiling the following piece of code, we get an error saying ‘Property name does not exist on type T’. How can we solve this problem?
function printName(obj) {
    console.log(obj.name);
}
// An Entity should have a unique identifier. The type of identifier, however, is dependent on the use case. In some cases, the ID might be a number, in other cases, it might be a string, GUID, etc. Represent the entity using a generic class.
class Entity {
    constructor(id) {
        this.id = id;
    }
}
const entity = new Entity(1234);
console.log(entity.id);
