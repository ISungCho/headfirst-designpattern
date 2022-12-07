import Duck from "./Duck";
import Turkey from "./Turkey";

class DuckAdapter implements Turkey {
  duck!: Duck;
  random: number;
  constructor(duck: Duck) {
    this.duck = duck;
    this.random = Math.random() * 6;
  }
  gobble() {
    this.duck.quack();
  }
  fly() {
    if (this.random === 0) {
      this.duck.fly();
    }
  }
}

export default DuckAdapter;
