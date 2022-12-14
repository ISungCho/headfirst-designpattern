import Command from './Command'

export class Splinkler {
	waterOn() {
		console.log('νΈμ!')
	}

	waterOff() {
		console.log('λ..λ..')
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
