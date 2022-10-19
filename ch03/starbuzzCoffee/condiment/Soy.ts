import CondimentalDecorator from '../CondimentDecorator'
import Beverage from '../Beverage'
import { SizeEnum } from '../meta/type'
class Soy extends CondimentalDecorator {
	constructor(beverage: Beverage) {
		super()
		this.beverage = beverage
	}
	getDescription(): string {
		return this.beverage.getDescription() + ', 두유'
	}
	cost(): number {
		const cost = this.beverage.cost()
		const size = this.beverage.getSize()
		switch (size) {
			case SizeEnum.Grande:
				return cost + 900
			case SizeEnum.Venti:
				return cost + 1100
			case SizeEnum.Tall:
			default:
				return cost + 700
		}
	}
}

export default Soy
