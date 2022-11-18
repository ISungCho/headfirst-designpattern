import Command from './Command'

export class Splinkler {
	waterOn() {
		console.log('푸슉!')
	}

	waterOff() {
		console.log('뚝..뚝..')
	}
}

class SplinklerOnCommand implements Command {
	splinkler!: Splinkler
	constructor(splinkler: Splinkler) {
		this.splinkler = splinkler
	}
	execute() {
		this.splinkler.waterOn()
	}
}

export default SplinklerOnCommand
