export interface Quackable {
	quack(): void
}

export class MallardDuck implements Quackable {
	quack() {
		console.log('꽥꽥')
	}
}

export class RedheadDuck implements Quackable {
	quack() {
		console.log('꽥꽥')
	}
}

export class DuckCall implements Quackable {
	quack() {
		console.log('꽉꽉')
	}
}
export class RubberDuck implements Quackable {
	quack() {
		console.log('삑삑')
	}
}
