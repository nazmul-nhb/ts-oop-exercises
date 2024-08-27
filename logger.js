"use strict";
class Logger {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeMessage() {
        return `${this.fileName} is Loaded!`;
    }
}
const money = new Logger("Salman Fucking Rahman");
console.log(money.writeMessage());
