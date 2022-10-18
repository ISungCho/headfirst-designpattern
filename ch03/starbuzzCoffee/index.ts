import Beverage from '../starbuzzCoffee/Beverage';
import DarkRoast from '../starbuzzCoffee/beverage/DarkRoast';
import Milk from './condiment/Milk';

const beverage: Beverage = new DarkRoast()
console.log(`${beverage.getDescription()}: $${beverage.cost()}`)


let beverage2: Beverage = new DarkRoast()
beverage2 = new Milk(beverage2)
console.log(`${beverage2.getDescription()}: $${beverage2.cost()}`)