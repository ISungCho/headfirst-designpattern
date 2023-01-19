import Clip from "./Clip";
import BeatModelInterface, { BeatObserver, BPMObserver } from "./BeatModelInterface";

export class BeatModel implements BeatModelInterface {
  beatObservers: Array<BeatObserver> = [];
  bpmObservers: Array<BPMObserver> = [];
  bpm: number = 90;
  stop: boolean = false;
  clip!: Clip;
  timer!: ReturnType<typeof setInterval>;

  initialize(): void {
    this.clip = new Clip("비트박스");
    this.clip.open();
  }
  on(): void {
    this.bpm = 90;
    this.notifyBPMObservers();
    this.stop = false;
    this.run()
  }
  off(): void {
    this.stopBeat();
    this.stop = true;
    clearTimeout(this.timer);
  }
  run() {
    if (!this.stop) {
      this.timer = setInterval(() => {
        this.playBeat();
        this.notifyBeatObservers();
      }, 100000 / this.getBPM());
    }
  }
  setBPM(bpm: number): void {
    this.bpm = bpm;
    this.notifyBPMObservers();
  }
  getBPM(): number {
    return this.bpm;
  }

  playBeat() {
    this.clip.setFramePosition(0);
    this.clip.start();
  }

  stopBeat() {
    this.clip.setFramePosition(0);
    this.clip.stop();
  }

  // Beat Observer 등록
  registerBeatObserver(o: BeatObserver) {
    this.beatObservers.push(o);
  }
  removeBeatObserver(o: BeatObserver) {
    this.beatObservers.filter((aObserver) => aObserver !== o);
  }
  notifyBeatObservers(): void {
    this.beatObservers.forEach((observer) => {
      observer.updateBeat();
    });
  }

  // BPM Observer 등록
  registerBPMObserver(o: BPMObserver) {
    this.bpmObservers.push(o);
  }
  removeBPMObserver(o: BPMObserver) {
    this.bpmObservers.filter((aObserver) => aObserver !== o);
  }
  notifyBPMObservers(): void {
    this.bpmObservers.forEach((observer) => {
      observer.updateBPM();
    });
  }
}

export default BeatModel