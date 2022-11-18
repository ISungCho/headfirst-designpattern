import Beverage from './Beverage'

abstract class CondimentalDecorator extends Beverage {
	protected beverage!: Beverage
	// 왜 abscract로 정의를 해주어야 하는 건가요?
	// => 자식 클래스에서 필수적으로 정의 되어야하기 때문입니다.
	abstract getDescription(): string
	// 부모 클래스에서 정의를 해줬는데 왜 정의를 해주어야 하는 건가요?
	// => ???
	getSize() {
		return this.beverage.getSize()
	}
}

export default CondimentalDecorator
