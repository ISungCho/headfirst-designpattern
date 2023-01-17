import { MallardDuck, Quackable, RedheadDuck, DuckCall, RubberDuck } from './Duck'
import { Goose } from './Goose'
import { GooseAdapter } from './GooseAdapter'

export class DuckSimulator {
	startSimulate() {
		const mallardDuck = new MallardDuck()
		const redheadDuck = new RedheadDuck()
		const duckCall = new DuckCall()
		const rubberDuck = new RubberDuck()
		const goose = new Goose()

		console.log('\n오리 시뮬레이션 게임')
		this.simulate(mallardDuck)
		this.simulate(redheadDuck)
		this.simulate(duckCall)
		this.simulate(rubberDuck)
		this.simulate(new GooseAdapter(goose))
	}

	simulate(duck: Quackable) {
		duck.quack()
	}
}
