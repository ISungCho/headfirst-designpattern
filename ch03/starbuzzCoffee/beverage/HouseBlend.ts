import Beverage from '../Beverage'
class HouseBlend extends Beverage {
	constructor() {
		super()
		this.description = '하우스 블렌드 커피'
	}
	cost(): number {
		return 4000
	}
}

export default HouseBlend
