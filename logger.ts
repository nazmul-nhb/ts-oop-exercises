class Logger {
	fileName: string;

	constructor(fileName: string) {
		this.fileName = fileName;
	}

	writeMessage(): string {
		return `${this.fileName} is Loaded!`;
	}
}

const money = new Logger("Salman Fucking Rahman");

console.log(money.writeMessage());

class Logger2 {
	constructor(public logFile: string) {}
	log(message: string) {}
}