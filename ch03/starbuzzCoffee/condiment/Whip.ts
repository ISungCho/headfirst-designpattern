import CondimentalDecorator from '../CondimentDecorator'
import Beverage from '../Beverage';
class Whip extends CondimentalDecorator {
	constructor(beverage: Beverage) {
    super()
    this.beverage = beverage
	}
	getDescription(): string {
		return this.beverage.getDescription() + ', 휘핑크림'
	}
	cost(): number {
		return this.beverage.cost() + 1000
	}
}

export default Whip
