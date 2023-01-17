import { Observer, Quackable, Observable } from "./DuckObservable";
import { Goose } from "./Goose";

export class GooseAdapter implements Quackable {
  goose = new Goose();
  observable!: Observable;
  constructor(goose: Goose) {
    this.goose = goose;
    this.observable = new Observable(this);
  }
  quack(): void {
    this.goose.honk();
    this.notifyObservers();
  }
  registerObserver(obsever: Observer) {
    this.observable.registerObserver(obsever);
  }
  notifyObservers() {
    this.observable.notifyObservers();
  }
	toString(): string {
			return 'GooseAdapter'
	}
}
