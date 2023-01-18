import { BPMObserver, BeatObserver } from "../model/BeatModelInterface";
import BeatModelInterface from "../model/BeatModelInterface";
import { ControllerInterface } from "../controller";
class BeatBar {
  value: number = 0;
  setValue(value: number) {
    this.value = value;
  }
  getValue() {
    return this.value;
  }
}
class Label {
  text: string = "";
  setText(text: string) {
    this.text = text;
  }
  getText() {
    return this.text;
  }
}
class DjView implements BPMObserver, BeatObserver {
  model!: BeatModelInterface;
  controller!: ControllerInterface;
  beatBar: BeatBar;
  bpmOutputLabel: Label;
  constructor(controller: ControllerInterface, model: BeatModelInterface) {
    this.controller = controller;
    this.model = model;
    model.registerBPMObserver(this);
    model.registerBeatObserver(this);
  }

  createView() {
    this.beatBar = new BeatBar();
    this.beatBar.setValue(0);
    this.bpmOutputLabel = new Label();
    // view
    console.log(`beatBar: ${this.beatBar}`);
    console.log(`label: ${this.bpmOutputLabel}`);
  }

  updateBeat(): void {
    this.beatBar.setValue(100);
  }
  updateBPM(): void {
    let bpm = this.model.getBPM();
    if (bpm === 0) {
      this.bpmOutputLabel.setText("offline");
    } else {
      this.bpmOutputLabel.setText(`Current BPM: ${this.model.getBPM}`);
    }
  }
}

export default DjView;
