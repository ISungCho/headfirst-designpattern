import RemoteControl from './RemoteControl'
import { CeilingFanHighCommand, CeilingFanOffCommand } from './Command'
import CeilingFan from './CeilingFan'

const remoteControl = new RemoteControl()
const ceilingFan = new CeilingFan('Living Room')

const ceilingFanHighCommand = new CeilingFanHighCommand(ceilingFan)
const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan)

remoteControl.setCommand(0, ceilingFanHighCommand, ceilingFanOffCommand)


remoteControl.onButtonWasPushed(0)
console.log(remoteControl.toString())
remoteControl.offButtonWasPushed(0)
console.log(remoteControl.toString())
remoteControl.undoButtonWasPushed()
console.log(remoteControl.toString())

