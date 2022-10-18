import Beverage from '../Beverage'

class DarkRoast extends Beverage {
	constructor() {
    super()
    this.description = "다크 로스트"
	}

	cost(): number {
		return 1.99
	}
}

export default DarkRoast
