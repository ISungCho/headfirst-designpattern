import { BPMObserver, BeatObserver } from "../model/BeatModelInterface";
import BeatModelInterface from "../model/BeatModelInterface";
import { ControllerInterface } from "../controller/ControllerInterface";
import { BeatBar, Label, MenuItem, TextField, Menu } from "./Component";

class DjView implements BPMObserver, BeatObserver {
  model!: BeatModelInterface;
  controller!: ControllerInterface;

  beatBar!: BeatBar;
  bpmOutputLabel!: Label;
  bpmTextField!: TextField;
  menu!: Menu;
  startMenuItem!: MenuItem;
  stopMenuItem!: MenuItem;

  constructor(controller: ControllerInterface, model: BeatModelInterface) {
    this.controller = controller;
    this.model = model;
    model.registerBPMObserver(this);
    model.registerBeatObserver(this);
  }

  createView() {
    console.log("Beat Bar 표시");
    this.beatBar = new BeatBar();
    this.beatBar.setValue(0);
    this.bpmOutputLabel = new Label("");
    this.bpmOutputLabel.setText(`offline`);

    this.showView();
  }

  showView() {
    console.log(`beatBar: ${this.beatBar.getValue()}`);
    console.log(`label: ${this.bpmOutputLabel.getText()}`);
  }

  createConrols() {
    console.log("Constrols 표시");
    // menu
    this.menu = new Menu();
    this.startMenuItem = new MenuItem("Start");
    this.stopMenuItem = new MenuItem("Stop");
    this.showControls();
  }

  showControls() {
    console.log(`${this.startMenuItem.getText()}: ${this.startMenuItem.getEnabled()}`);
    console.log(`${this.stopMenuItem.getText()}: ${this.stopMenuItem.getEnabled()}`);
  }

  enableStopMenuItem() {
    this.stopMenuItem.setEnabled(true);

    this.showControls();
  }

  disableStopMenuItem() {
    this.stopMenuItem.setEnabled(false);

    this.showControls();
  }
  enableStartMenuItem() {
    this.startMenuItem.setEnabled(true);

    this.showControls();
  }
  disableStartMenuItem() {
    this.startMenuItem.setEnabled(false);

    this.showControls();
  }

  updateBeat(): void {
    if (this.beatBar !== null) {
      this.beatBar.setValue(100);
    }

    this.showView();
  }
  updateBPM(): void {
    let bpm = this.model.getBPM();
    if (bpm === 0) {
      this.bpmOutputLabel.setText("offline");
    } else {
      this.bpmOutputLabel.setText(`Current BPM: ${this.model.getBPM()}`);
    }

    this.showView();
  }
}

export default DjView;
