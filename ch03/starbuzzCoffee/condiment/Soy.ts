import CondimentalDecorator from '../CondimentDecorator'
import Beverage from '../Beverage'
class Soy extends CondimentalDecorator {
	constructor(beverage: Beverage) {
		super()
		this.beverage = beverage
	}
	getDescription(): string {
		return this.beverage.getDescription() + ', 두유'
	}
	cost(): number {
		return this.beverage.cost() + 700
	}
}

export default Soy
