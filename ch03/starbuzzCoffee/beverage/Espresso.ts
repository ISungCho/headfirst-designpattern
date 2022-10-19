import Beverage from '../Beverage'
class Espresso extends Beverage {
	constructor() {
		super()
		this.description = '에스프레소'
	}
	cost(): number {
		return 2000
	}
}

export default Espresso
