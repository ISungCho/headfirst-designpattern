import { Quackable } from "./Duck";
export class Flock implements Quackable {
  quacks: Array<Quackable> = [];

  add(quack: Quackable) {
    this.quacks.push(quack);
  }

  quack(): void {
    this.quacks.forEach((aQuack) => {
      aQuack.quack();
    });
  }
}
