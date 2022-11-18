import Command from './Command'
export class Light {
  on() {
    console.log('반짝!')
  }
  off() {
    console.log('깜깜..')
  }
}

class LightOnCommand implements Command {
	protected light!: Light
	constructor(light: Light) {
		this.light = light
	}
	execute() {
		this.light.on()
	}
}

export default LightOnCommand
