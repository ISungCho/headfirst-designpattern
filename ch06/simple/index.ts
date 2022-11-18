import LightOnCommand, { Light } from './Light';
import SimpleRemoteControl from './SimpleRemoteControl';
import { Splinkler } from './Splinkler';
import SplinklerOnCommand from './Splinkler';

const simpleController = new SimpleRemoteControl()
const light = new Light()
const lightCommand = new LightOnCommand(light)

simpleController.setCommand(lightCommand)
simpleController.buttonWasPressed()

const splinkler = new Splinkler()
const splinklerOnCommand = new SplinklerOnCommand(splinkler)

simpleController.setCommand(splinklerOnCommand)
simpleController.buttonWasPressed()