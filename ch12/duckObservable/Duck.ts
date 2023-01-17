import { Observer, Quackable, Observable } from "./DuckObservable";
export class MallardDuck implements Quackable {
  observable!: Observable;
  constructor() {
    this.observable = new Observable(this);
  }
  quack() {
    console.log("꽥꽥");
    this.notifyObservers();
  }
  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }
  notifyObservers() {
    this.observable.notifyObservers();
	}
	toString(): string {
			return 'MallardDuck'
	}
}

export class RedheadDuck implements Quackable {
  observable!: Observable;
  constructor() {
    this.observable = new Observable(this);
  }
  quack() {
    console.log("꽥꽥");
    this.notifyObservers();
  }
  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }
  notifyObservers() {
    this.observable.notifyObservers();
  }
	toString(): string {
			return 'RedheadDuck'
	}
}

export class DuckCall implements Quackable {
  observable!: Observable;
  constructor() {
    this.observable = new Observable(this);
  }
  quack() {
    console.log("꽉꽉");
    this.notifyObservers();
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }
  notifyObservers() {
    this.observable.notifyObservers();
  }
	toString(): string {
			return 'DuckCall'
	}
}
export class RubberDuck implements Quackable {
  observable!: Observable;
  constructor() {
    this.observable = new Observable(this);
  }
  quack() {
    console.log("삑삑");
    this.notifyObservers();
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer);
  }
  notifyObservers() {
    this.observable.notifyObservers();
  }
	toString(): string {
			return 'RubberDuck'
	}
}
