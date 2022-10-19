import Beverage from '../Beverage'
import CondimentalDecorator from '../CondimentDecorator'

class Mocha extends CondimentalDecorator {
	constructor(beverage: Beverage) {
		super()
		this.beverage = beverage
	}
	getDescription(): string {
		return this.beverage.getDescription() + ', 모카'
	}
	cost(): number {
		return this.beverage.cost() + 1000
	}
}

export default Mocha
