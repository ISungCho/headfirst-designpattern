import Beverage from '../Beverage'
class Decaf extends Beverage {
	constructor() {
		super()
		this.description = '디카페인'
	}
	cost(): number {
		return 2500
	}
}

export default Decaf
