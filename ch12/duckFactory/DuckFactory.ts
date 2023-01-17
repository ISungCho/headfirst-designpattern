import { DuckCall, MallardDuck, RedheadDuck, RubberDuck, Quackable } from "./Duck";
import { QuakCounter } from "./QuackCounter";
import { GooseAdapter } from "./GooseAdapter";
import { Goose } from "./Goose";

abstract class AbstractDuckFactory {
  abstract createMallardDuck(): Quackable;
  abstract createRedheadDuck(): Quackable;
  abstract createDuckCall(): Quackable;
  abstract createRubberDuck(): Quackable;
  abstract createGooseDuck(): Quackable;
}

export class DuckFactory extends AbstractDuckFactory {
  createGooseDuck(): Quackable {
    return new GooseAdapter(new Goose());
  }
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
  createGooseDuck(): Quackable {
    return new GooseAdapter(new Goose());
  }
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
