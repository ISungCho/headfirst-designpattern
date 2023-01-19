import { ControllerInterface } from "./ControllerInterface";
import BeatModelInterface from "../model/BeatModelInterface";
import DjView from "../view/DjView";
class BeatController implements ControllerInterface {
  model!: BeatModelInterface;
  view!: DjView;
  constructor(model: BeatModelInterface) {
    this.model = model;
    this.view = new DjView(this, model);

    this.view.createView();
    this.view.createConrols();
    this.model.initialize();
  }
  start(): void {
    this.model.on();
    this.view.disableStartMenuItem();
    this.view.enableStopMenuItem();
  }
  stop(): void {
    this.model.off();
    this.view.disableStopMenuItem();
    this.view.enableStartMenuItem();
  }
  increaseBPM(): void {
    this.model.setBPM(this.model.getBPM() + 1);
  }
  decreaseBPM(): void {
    this.model.setBPM(this.model.getBPM() - 1);
  }
  setBPM(bpm: number) {
    this.model.setBPM(bpm);
  }
}

export default BeatController;
