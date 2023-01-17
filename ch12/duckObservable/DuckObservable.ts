export interface Observer {
  update(duck: QuackObservable): void;
}
export class Quackologist implements Observer {
  update(duck: QuackObservable) {
    console.log(`꽥꽥학자: ${duck.toString()}가 방금 소리를 냈다.`);
  }
}

export interface QuackObservable {
  registerObserver(obsever: Observer): void;
  notifyObservers(): void;
}

export interface Quackable extends QuackObservable {
  quack(): void;
  toString(): string
}

export class Observable implements QuackObservable {
  observers: Array<Observer> = [];
  duck: QuackObservable;
  constructor(duck: QuackObservable) {
    this.duck = duck;
  }
  registerObserver(obsever: Observer) {
    this.observers.push(obsever);
  }
  notifyObservers() {
    this.observers.forEach((aObserver) => {
      aObserver.update(this.duck);
    });
  }
}
