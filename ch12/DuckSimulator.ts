import { MallardDuck, Quackable, RedheadDuck, DuckCall, RubberDuck } from './Duck'
import { Goose } from './Goose'
import { GooseAdapter } from './GooseAdapter'
import { QuakCounter } from './QuackCounter'

export class DuckSimulator {
	startSimulate() {
		const mallardDuck = new QuakCounter(new MallardDuck())
		const redheadDuck = new QuakCounter(new RedheadDuck())
		const duckCall = new QuakCounter(new DuckCall())
		const rubberDuck = new QuakCounter(new RubberDuck())
		const goose = new Goose()

		console.log('\n오리 시뮬레이션 게임')
		this.simulate(mallardDuck)
		this.simulate(redheadDuck)
		this.simulate(duckCall)
		this.simulate(rubberDuck)
    this.simulate(new GooseAdapter(goose))
    console.log(QuakCounter.getQuacks())
	}

	simulate(duck: Quackable) {
		duck.quack()
	}
}
