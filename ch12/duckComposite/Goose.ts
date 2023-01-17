export interface Honkable {
	honk(): void
}

export class Goose implements Honkable {
	honk(): void {
		console.log('끽끽')
	}
}
