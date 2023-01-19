import BeatController from "./BeatModelController";
import BeatModel from "../model/BeatModel";
import DjView from "../view/DjView";

const model = new BeatModel();
const beatController = new BeatController(model);

console.log("------- START --------");
beatController.start();

setTimeout(() => {
  console.log("------- BPM UP --------");
  beatController.increaseBPM();
}, 3000);

setTimeout(() => {
  console.log("------- BPM DOWN --------");
  beatController.decreaseBPM();
}, 6000);

setTimeout(() => {
  console.log("------- BPM SET --------");
  beatController.setBPM(200);
}, 9000);

setTimeout(() => {
  console.log("------- STOP --------");
  beatController.stop();
}, 12000);
