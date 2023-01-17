import { DuckCall, MallardDuck, RedheadDuck, RubberDuck, Quackable } from "./Duck";
import { QuakCounter } from "./QuackCounter";

abstract class AbstractDuckFactory {
  abstract createMallardDuck(): Quackable;
  abstract createRedheadDuck(): Quackable;
  abstract createDuckCall(): Quackable;
  abstract createRubberDuck(): Quackable;
}

export class DuckFactory extends AbstractDuckFactory {
  createMallardDuck() {
    return new MallardDuck();
  }
  createRedheadDuck() {
    return new RedheadDuck();
  }
  createDuckCall() {
    return new DuckCall();
  }
  createRubberDuck() {
    return new RubberDuck();
  }
}

export class CountingDuckFactory extends AbstractDuckFactory {
  createMallardDuck() {
    return new QuakCounter(new MallardDuck());
  }
  createRedheadDuck() {
    return new QuakCounter(new RedheadDuck());
  }
  createDuckCall() {
    return new QuakCounter(new DuckCall());
  }
  createRubberDuck() {
    return new QuakCounter(new RubberDuck());
  }
}
