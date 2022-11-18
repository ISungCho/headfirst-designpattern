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

export class NoCommand implements Command {
	undo(): void {}
	execute(): void {}
}

export default Command
