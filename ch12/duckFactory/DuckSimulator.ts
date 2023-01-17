import { MallardDuck, Quackable, RedheadDuck, DuckCall, RubberDuck } from "./Duck";
import { DuckFactory, CountingDuckFactory } from "./DuckFactory";
import { Goose } from "./Goose";
import { GooseAdapter } from "./GooseAdapter";
import { QuakCounter } from "./QuackCounter";

export class DuckSimulator {
  startSimulate() {
    const duckFactory = new CountingDuckFactory();
    const mallardDuck = duckFactory.createMallardDuck();
    const redheadDuck = duckFactory.createRedheadDuck();
    const duckCall = duckFactory.createDuckCall();
    const rubberDuck = duckFactory.createRubberDuck();
    const gooseDuck = duckFactory.createGooseDuck();

    console.log("\n오리 시뮬레이션 게임 - 팩토리패턴");
    this.simulate(mallardDuck);
    this.simulate(redheadDuck);
    this.simulate(duckCall);
    this.simulate(rubberDuck);
    this.simulate(gooseDuck);
    console.log(QuakCounter.getQuacks());
  }

  simulate(duck: Quackable) {
    duck.quack();
  }
}
