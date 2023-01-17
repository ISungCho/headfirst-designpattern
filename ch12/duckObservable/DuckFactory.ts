import { DuckCall, MallardDuck, RedheadDuck, RubberDuck } from "./Duck";
import { QuakCounter } from "./QuackCounter";
import { GooseAdapter } from "./GooseAdapter";
import { Goose } from "./Goose";
import { Quackable } from "./DuckObservable";

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
  createMallardDuck(): Quackable {
    return new MallardDuck();
  }
  createRedheadDuck(): Quackable {
    return new RedheadDuck();
  }
  createDuckCall(): Quackable {
    return new DuckCall();
  }
  createRubberDuck(): Quackable {
    return new RubberDuck();
  }
}

export class CountingDuckFactory extends AbstractDuckFactory {
  createGooseDuck(): Quackable {
    return new GooseAdapter(new Goose());
  }
  createMallardDuck(): Quackable {
    return new QuakCounter(new MallardDuck());
  }
  createRedheadDuck(): Quackable {
    return new QuakCounter(new RedheadDuck());
  }
  createDuckCall(): Quackable {
    return new QuakCounter(new DuckCall());
  }
  createRubberDuck(): Quackable {
    return new QuakCounter(new RubberDuck());
  }
}
