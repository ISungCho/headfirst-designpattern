import { Size, SizeEnum } from './meta/type'

abstract class Beverage {
	protected description: string = '제목없음'
	protected size: Size = SizeEnum.Tall
	getDescription() {
		return this.description
	}
	getSize() {
		return this.size
	}
	setSize(size: Size) {
		this.size = size
	}
	abstract cost(): number
}

export default Beverage
