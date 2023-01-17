import { MallardDuck, Quackable, RedheadDuck, DuckCall, RubberDuck } from "./Duck";
import { DuckFactory, CountingDuckFactory } from "./DuckFactory";
import { Flock } from "./Flock";
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
    
    const flockOfDucks = new Flock()
    flockOfDucks.add(mallardDuck)
    flockOfDucks.add(redheadDuck)
    flockOfDucks.add(duckCall)
    flockOfDucks.add(rubberDuck)
    flockOfDucks.add(gooseDuck)
    
    console.log("\n오리 시뮬레이션 게임 - 컴포지트패턴");
    this.simulate(flockOfDucks);
    console.log(QuakCounter.getQuacks());
  }

  simulate(duck: Quackable) {
    duck.quack();
  }
}
