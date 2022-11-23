class CeilingFan {
	static readonly HIGH: number = 3
	static readonly MEDIUM: number = 2
	static readonly LOW: number = 1
	static readonly OFF: number = 0
	location: string
	speed: number

	constructor(location: string) {
		this.location = location
		this.speed = CeilingFan.OFF
	}

	high() {
		this.speed = CeilingFan.HIGH
		console.log(this.toString())
	}

	medium() {
		this.speed = CeilingFan.MEDIUM
		console.log(this.toString())
	}

	low() {
		this.speed = CeilingFan.LOW
		console.log(this.toString())
	}

	off() {
		this.speed = CeilingFan.OFF
		console.log(this.toString())
	}

	getSpeed() {
		return this.speed
	}

	toString() {
		return `${this.location}의 속도: ${this.speed}`
	}
}

export default CeilingFan
