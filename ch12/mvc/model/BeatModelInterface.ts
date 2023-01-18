export interface BeatObserver {
  updateBeat(): void;
}
export interface BPMObserver {
  updateBPM(): void;
}
interface BeatModelInterface {
  // BeatModel의 인스턴스가 만들어질 때호추뢰는 메소드
  initialize(): void;
  // 비트 생성기를 켜고 끄는 메소드
  on(): void;
  off(): void;
  setBPM(bpm: number): void;
  // 현재 BPM을 리턴, 비트 생성기가 꺼져있으면 0
  getBPM(): number;
  //beat
  registerBeatObserver(o: BeatObserver): void;
  removeBeatObserver(o: BeatObserver): void;

  //bpm
  registerBPMObserver(o: BPMObserver): void;
  removeBPMObserver(o: BPMObserver): void;
}

export default BeatModelInterface;
