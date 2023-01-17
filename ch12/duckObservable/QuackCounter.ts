import { Observer, Quackable, Observable } from "./DuckObservable";

export class QuakCounter implements Quackable {
  quacker!: Quackable;
  observable!: Observable;
  static numberOfQuacks: number = 0;
  constructor(quacker: Quackable) {
    this.quacker = quacker;
    this.observable = new Observable(this);
  }
  quack(): void {
    this.quacker.quack();
    this.increase();
    this.notifyObservers();
  }
  toString(): string {
    return this.quacker.toString();
  }
  registerObserver(obsever: Observer) {
    this.observable.registerObserver(obsever);
  }
  notifyObservers() {
    this.observable.notifyObservers();
  }
  increase() {
    QuakCounter.numberOfQuacks++;
  }
  static getQuacks() {
    return this.numberOfQuacks;
  }
}
