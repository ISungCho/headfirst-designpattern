import { Quackable, Quackologist } from "./DuckObservable";
import { CountingDuckFactory } from "./DuckFactory";
import { QuakCounter } from "./QuackCounter";
import { Flock } from "./Flock";

export class DuckSimulator {
  startSimulate() {
    const duckFactory = new CountingDuckFactory();
    const mallardDuck = duckFactory.createMallardDuck();
    const redheadDuck = duckFactory.createRedheadDuck();
    const duckCall = duckFactory.createDuckCall();
    const rubberDuck = duckFactory.createRubberDuck();
    const gooseDuck = duckFactory.createGooseDuck();

    console.log("\n오리 시뮬레이션 게임 - 옵저버 패턴");
    const flock = new Flock();

    flock.add(mallardDuck);
    flock.add(redheadDuck);
    flock.add(duckCall);
    flock.add(rubberDuck);
    flock.add(gooseDuck);

    this.simulate(flock);
    console.log(QuakCounter.getQuacks());

    console.log("\n<옵저버>");
    const quackologist = new Quackologist();
    mallardDuck.registerObserver(quackologist);
    quackologist.update(mallardDuck);
  }

  simulate(duck: Quackable) {
    duck.quack();
  }
}
