import { Quackable } from './Duck'

export class QuakCounter implements Quackable {
	quacker!: Quackable
	static numberOfQuacks: number = 0
	constructor(quacker: Quackable) {
		this.quacker = quacker
	}
	quack(): void {
		this.quacker.quack()
		this.increase()
	}
	increase() {
		QuakCounter.numberOfQuacks++
  }
  static getQuacks() {
    return this.numberOfQuacks
  }
}
