class Logger {
	constructor(public fileName: string) {
		this.fileName = fileName;
	}

	writeMessage(): string {
		return `${this.fileName} is Loaded!`;
	}
}

const money = new Logger("Salman Fucking Rahman");

console.log(money.writeMessage());
