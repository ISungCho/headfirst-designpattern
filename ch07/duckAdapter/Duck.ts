interface Duck {
  quack();
  fly();
}

export class MallardDuck implements Duck {
  quack() {
    console.log("꽥꽥");
  }
  fly() {
    console.log("훨훨훨훨");
  }
}

export default Duck;
