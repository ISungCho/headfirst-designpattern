import IObserver from './IObserver'
import ISubject from './ISubject';

class SimpleObserver implements IObserver {
  #value: number = 0
  #simpleSubject: ISubject
  constructor(simpleSubject: ISubject) {
    this.#simpleSubject = simpleSubject
    simpleSubject.registerObserver(this)
  }

	update(value: number) {
    this.#value = value
    this.display()
	}

	display() {
		console.log(`Observer의 value는 ${this.#value}입니다.`)
	}
}

export default SimpleObserver
