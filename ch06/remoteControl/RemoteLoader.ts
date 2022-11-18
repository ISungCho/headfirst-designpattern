import RemoteControl from './RemoteControl'
import { LightOffCommand, LightOnCommand } from './Command'
import Light from './Light'

const remoteControl = new RemoteControl()

const kitchenLight = new Light()
const livingRoomLight = new Light()

const kitchenLightOn = new LightOnCommand(kitchenLight)
const kitchenLightOff = new LightOffCommand(kitchenLight)

const livingRoomLightOn = new LightOnCommand(livingRoomLight)
const livingRoomLightOff = new LightOffCommand(livingRoomLight)

console.log(remoteControl.toString())
remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff)
remoteControl.setCommand(3, livingRoomLightOn, livingRoomLightOff)
console.log(remoteControl.toString())

for (let i = 0; i < 4; i++) {
	remoteControl.onButtonWasPushed(i)
  remoteControl.offButtonWasPushed(i)
}

