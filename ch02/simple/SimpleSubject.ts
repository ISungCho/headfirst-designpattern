import IObserver from './IObserver'
import ISubject from './ISubject'

class SimpleSubject implements ISubject {
	#observers: Array<IObserver>
	#value: number = 0
	constructor() {
		this.#observers = []
	}

	registerObserver(observer: IObserver) {
		this.#observers.push(observer)
	}
	removeObserver(observer: IObserver) {
		this.#observers.filter((aObserver) => aObserver !== observer)
	}
	notifyObservers() {
		this.#observers.forEach((aObserver) => {
			aObserver.update(this.#value)
		})
	}
	setValue(value: number) {
		this.#value = value
		this.notifyObservers()
	}
}

export default SimpleSubject
