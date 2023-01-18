class Clip {
  name: string = "";
  framePosition: number = 0;
  constructor(name: string) {
    this.name = name;
  }
  open() {
    console.log(`${this.name} 클립이 열렸습니다.`);
  }
  start() {
    console.log(`북치기! 박치기!! `);
  }
  stop() {
    console.log(`${this.name} 클립이 정지했습니다.`);
  }
  setFramePosition(frame: number) {
    this.framePosition = frame;
  }
  getFramePosition() {
    return this.framePosition;
  }
}

export default Clip