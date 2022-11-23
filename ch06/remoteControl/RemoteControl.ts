import Command, { NoCommand } from './Command'

const MAX = 7
class RemoteControl {
	private onCommands: Command[] = []
	private offCommands: Command[] = []
	private undoCommand: Command;
	constructor() {
		this.onCommands = Array(MAX)
		this.offCommands = Array(MAX)
		const noCommand = new NoCommand()
		for (let i = 0; i < MAX; i++) {
			this.onCommands[i] = noCommand
			this.offCommands[i] = noCommand
		}
		this.undoCommand = noCommand
	}

	setCommand(slot: number, onCommand: Command, offCommand: Command) {
		this.onCommands[slot] = onCommand
		this.offCommands[slot] = offCommand
  }

	onButtonWasPushed(slot: number) {
		this.onCommands[slot].execute()
		this.undoCommand = this.onCommands[slot]
	}

	offButtonWasPushed(slot: number) {
		this.offCommands[slot].execute()
		this.undoCommand = this.offCommands[slot]
	}
	
	undoButtonWasPushed() {
		this.undoCommand.undo()
	}

	toString() {
		let stringBuffer: string = ''
		stringBuffer += '\n--------RemoteControl---------\n'
		for (let i = 0; i < MAX; i++) {
			stringBuffer += `[slot ${i}] ${this.onCommands[i].constructor.name}   ${this.offCommands[i].constructor.name}\n`
		}
		return stringBuffer
	}
}

export default RemoteControl
