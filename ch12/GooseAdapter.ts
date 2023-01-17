import { Quakable } from './Duck'
import { Goose } from './Goose'

export class GooseAdapter implements Quakable {
	goose = new Goose()
	constructor(goose: Goose) {
		this.goose = goose
	}
	quack(): void {
		this.goose.honk()
	}
}
