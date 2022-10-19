import Beverage from './Beverage'

abstract class CondimentalDecorator extends Beverage {
	protected beverage!: Beverage
	abstract getDescription(): string
}

export default CondimentalDecorator
