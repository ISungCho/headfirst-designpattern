import Beverage from '../Beverage'
class Decaf extends Beverage {
	constructor() {
		super()
		this.description = '๋์นดํ์ธ'
	}
	cost(): number {
		return 2500
	}
}

export default Decaf
