import CondimentalDecorator from '../CondimentDecorator'
import Beverage from '../Beverage'
class Milk extends CondimentalDecorator {
	constructor(beverage: Beverage) {
		super()
		this.beverage = beverage
	}
	getDescription(): string {
		return this.beverage.getDescription() + ', 우유'
	}
	cost() {
		return this.beverage.cost() + 500
	}
}

export default Milk