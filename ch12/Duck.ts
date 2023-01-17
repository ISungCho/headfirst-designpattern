import { Goose } from './Goose'

export interface Quakable {
	quack(): void
}

export class MallardDuck implements Quakable {
	quack() {
		console.log('꽥꽥')
	}
}

export class RedheadDuck implements Quakable {
	quack() {
		console.log('꽥꽥')
	}
}

export class DuckCall implements Quakable {
	quack() {
		console.log('꽉꽉')
	}
}
export class RubberDuck implements Quakable {
	quack() {
		console.log('삑삑')
	}
}
