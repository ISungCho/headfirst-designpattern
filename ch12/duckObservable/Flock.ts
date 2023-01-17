import { Observer, Quackable } from "./DuckObservable";
export class Flock implements Quackable {
  observables: Array<Quackable> = [];
  toString(): string {
    let result = "";
    this.observables.forEach((duck: Quackable) => {
      result += `${duck.toString()}, `;
    });
    return result;
  }
  registerObserver(obsever: Observer): void {
    this.observables.forEach((duck: Quackable) => {
      duck.registerObserver(obsever);
    });
  }
  notifyObservers(): void {
    this.observables.forEach((duck: Quackable) => {
      duck.notifyObservers();
    });
  }

  add(duck: Quackable) {
    this.observables.push(duck);
  }

  quack() {
    this.observables.forEach((duck: Quackable) => {
      duck.quack();
    });
  }
}
