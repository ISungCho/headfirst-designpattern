import IObserver from './IObserver'
import ISubject from './ISubject'
import IDisplayElement from './IDisplayElement'

class CurrentConditionsDisplay implements IObserver, IDisplayElement {
	#temperature: number = 0
	#humidity: number = 0
	#pressure: number = 0
	#weatherData: ISubject

	constructor(weatherData: ISubject) {
		this.#weatherData = weatherData
		this.#weatherData.registerObserver(this)
	}

	display() {
		console.log(`temperature: ${this.#temperature} humidity: ${this.#humidity} pressure: ${this.#pressure}`)
	}
	update(temperature: number, humidity: number, pressure: number) {
		this.#temperature = temperature
		this.#humidity = humidity
		this.#pressure = pressure
	}
}

export default CurrentConditionsDisplay
