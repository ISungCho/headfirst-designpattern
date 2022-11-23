class Light {
	name: string = ''
	constructor(name: string) {
		this.name = name
	}
	on() {
		console.log(this.name + '이 반짝!')
	}
	off() {
		console.log(this.name + '이 깜깜..')
	}
}

export default Light
