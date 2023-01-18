import BeatModelInterface from "../model/BeatModelInterface";
import DjView from "../view/DjView";
export interface ControllerInterface {
  start(): void;
  stop(): void;
  increaseBPM(): void;
  decreaseBPM(): void;
  setBPM(bpm: number);
}

class BeatController implements ControllerInterface {
  model!: BeatModelInterface;
  view!: DjView;
  constructor(model: BeatModelInterface) {
    this.model = model;
    this.view = new DjView(this, model);

    this.view.createView();
    this.model.initialize();
  }
  start(): void {
    this.model.on();
    // this.view.
  }
  stop(): void {
    this.model.off();
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
