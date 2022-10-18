abstract class Beverage {
	protected description: string = '제목없음'
	getDescription() {
		return this.description
	}
	abstract cost(): number
}

export default Beverage
