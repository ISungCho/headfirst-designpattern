import CeilingFan from './CeilingFan'
import Light from './Light'

interface Command {
	execute(): void
	undo(): void
}

export class LightOnCommand implements Command {
	light!: Light
	constructor(light: Light) {
		this.light = light
	}
	undo(): void {
		this.light.off()
	}
	execute(): void {
		this.light.on()
	}
}

export class LightOffCommand implements Command {
	light!: Light
	constructor(light: Light) {
		this.light = light
	}
	undo(): void {
		this.light.on()
	}
	execute(): void {
		this.light.off()
	}
}

export class CeilingFanHighCommand implements Command {
	ceilingFan!: CeilingFan
	prevSpeed: number = CeilingFan.OFF
	constructor(fan: CeilingFan) {
		this.ceilingFan = fan
	}
	execute(): void {
		this.prevSpeed = this.ceilingFan.getSpeed()
		this.ceilingFan.high()
	}
	undo(): void {
		switch (this.prevSpeed) {
			case CeilingFan.HIGH:
				this.ceilingFan.high()
				break
			case CeilingFan.MEDIUM:
				this.ceilingFan.medium()
				break
			case CeilingFan.LOW:
				this.ceilingFan.low()
				break
			case CeilingFan.OFF:
				this.ceilingFan.off()
				break
		}
	}
}

export class CeilingFanOffCommand implements Command {
	ceilingFan!: CeilingFan
	prevSpeed: number = CeilingFan.OFF
	constructor(fan: CeilingFan) {
		this.ceilingFan = fan
	}
	execute(): void {
		this.prevSpeed = this.ceilingFan.getSpeed()
		this.ceilingFan.off()
	}
	undo(): void {
		switch (this.prevSpeed) {
			case CeilingFan.HIGH:
				this.ceilingFan.high()
				break
			case CeilingFan.MEDIUM:
				this.ceilingFan.medium()
				break
			case CeilingFan.LOW:
				this.ceilingFan.low()
				break
			case CeilingFan.OFF:
				this.ceilingFan.off()
				break
		}
	}
}

export class NoCommand implements Command {
	undo(): void {}
	execute(): void {}
}

export default Command
