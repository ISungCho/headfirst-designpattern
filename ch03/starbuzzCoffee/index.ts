import Beverage from '../starbuzzCoffee/Beverage'
import DarkRoast from '../starbuzzCoffee/beverage/DarkRoast'
import Milk from './condiment/Milk'
import Mocha from './condiment/Mocha'
import Soy from './condiment/Soy'
import Decaf from './beverage/Decaf'
import HouseBlend from './beverage/HouseBlend'
import Espresso from './beverage/Espresso'
import Whip from './condiment/Whip'
import { SizeEnum } from './meta/type';

const beverage: Beverage = new DarkRoast()
console.log(`${beverage.getDescription()}: $${beverage.cost()}`)

let beverage2: Beverage = new HouseBlend()
beverage2.setSize(SizeEnum.Venti)
beverage2 = new Soy(beverage2)
beverage2 = new Mocha(beverage2)
console.log(`${beverage2.getDescription()}: $${beverage2.cost()}`)

let beverage3 = new Decaf()
beverage2 = new Milk(beverage2)
beverage3 = new Whip(beverage3)
beverage3 = new Whip(beverage3)
console.log(`${beverage3.getDescription()}: $${beverage3.cost()}`)
