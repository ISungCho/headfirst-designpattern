import IObserver from './IObserver'
import ISubject from './ISubject'

class WeatherData implements ISubject {
	#observers: Array<IObserver>
	#temperature: number = 0
	#humidity: number = 0
	#pressure: number = 0
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
			aObserver.update(this.#temperature, this.#humidity, this.#pressure)
		})
	}

	setTemperature(temperature: number) {
		this.#temperature = temperature
		this.measurementsChanged()
	}
	setHumidity(humidity: number) {
		this.#humidity = humidity
		this.measurementsChanged()
	}
	setPressure(pressure: number) {
		this.#pressure = pressure
		this.measurementsChanged()
	}
	measurementsChanged() {
		this.notifyObservers()
	}
}

export default WeatherData
