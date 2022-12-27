import GumballMachine from "./GumballMachine";

export interface State {
  insertQuarter(): void;
  ejectQuarter(): void;
  turnCrank(): void;
  dispense(): void;
  toString(): string;
}

export class SoldOutState implements State {
  gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  insertQuarter() {
    console.log("매진되었습니다. 다음기회에 이용해주세요");
  }
  ejectQuarter() {
    console.log("동전을 넣지 않으셨습니다. 동전이 반환되지 않습니다.");
  }
  turnCrank() {
    console.log("매진되었습니다.");
  }
  dispense() {
    console.log("매진입니다.");
  }
  toString(): string {
      return "SOLD_OUT"
  }
}

export class NoQuarterState implements State {
  gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  insertQuarter() {
    console.log("동전이 투입되었습니다.");
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }
  ejectQuarter() {
    console.log("동전을 넣지 않으셨습니다. 동전이 반환되지 않습니다.");
  }
  turnCrank() {
    console.log("동전을 넣어주세요");
  }
  dispense() {
    console.log("동전을 넣어주세요");
  }
  toString(): string {
      return "NO_QUARTER"
  }
}

export class HasQuarterState implements State {
  gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }
  insertQuarter() {
    console.log("이미 동전을 넣었습니다.");
  }
  ejectQuarter() {
    console.log("동전이 반환되었습니다.");
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }
  turnCrank() {
    console.log("손잡이를 돌리셨습니다.");
    if (this.gumballMachine.times === GumballMachine.WIN_TIMES) {
      this.gumballMachine.setState(this.gumballMachine.getWinState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
    }
  }
  dispense() {
    console.log("알맹이를 내보내고 있습니다.");
  }
  toString(): string {
      return "HAS_QUARTER"
  }
}

export class SoldState implements State {
  count = 0;
  gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
    this.count = gumballMachine.count;
  }
  insertQuarter() {
    console.log("이미 알맹이를 뽑으셨습니다.");
  }
  ejectQuarter() {
    console.log("알맹이를 내보내고 있습니다.");
  }
  turnCrank() {
    console.log("손잡이는 한 번만 돌려 주세요.");
  }
  dispense() {
    console.log("알맹이를 내보내고 있습니다.");
    this.count = this.count - 1;
    if (this.count == 0) {
      console.log("더 이상 알맹이가 없습니다.");
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }
  }
  toString(): string {
      return "SOLD"
  }
}

export class WinState implements State {
  count = 0;
  gumballMachine: GumballMachine;
  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
    this.count = gumballMachine.count;
  }
  insertQuarter() {
    console.log("이미 알맹이를 뽑으셨습니다.");
  }
  ejectQuarter() {
    console.log("알맹이를 내보내고 있습니다.");
  }
  turnCrank() {
    console.log("손잡이는 한 번만 돌려 주세요.");
  }
  dispense() {
    console.log("당첨! 2개의 알맹이를 내보내고 있습니다.");
    this.count = this.count - 2;
    if (this.count == 0) {
      console.log("더 이상 알맹이가 없습니다.");
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    }
  }
  toString(): string {
      return "WIN"
  }
}
