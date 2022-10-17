import WeatherData from './WeatherData'
import CurrentConditionsDisplay from './CurrentConditionsDisplay'

const weatherData = new WeatherData()
const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData)

currentConditionsDisplay.display()

weatherData.setTemperature(10)

currentConditionsDisplay.display()
