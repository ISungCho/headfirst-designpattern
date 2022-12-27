import { State, NoQuarterState, SoldOutState, HasQuarterState, SoldState, WinState } from "./State";
const WIN_TIMES = 2;
class GumballMachine {
  static WIN_TIMES = WIN_TIMES
  soldOutState!: State;
  noQuarterState!: State;
  hasQuarterState!: State;
  soldState!: State;
  winState!: State;

  count = 0;
  times = 0;
  state: State = new SoldOutState(this);

  constructor(gumballsCount: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winState = new WinState(this);

    this.count = gumballsCount;
    if (gumballsCount > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }
  getHasQuarterState() {
    return this.hasQuarterState;
  }
  getNoQuarterState() {
    return this.noQuarterState;
  }
  getSoldOutState() {
    return this.soldOutState;
  }
  getSoldState() {
    return this.soldState;
  }
  getWinState() {
    return this.winState;
  }
  setState(state: State) {
    this.state = state;
  }

  insertQuarter() {
    this.state.insertQuarter();
  }
  ejectQuarter() {
    this.state.ejectQuarter();
  }
  turnCrank() {
    this.state.turnCrank();
    // this.dispense()
  }
  dispense() {
    this.state.dispense();
    if (this.times > WIN_TIMES) {
      this.times = 0;
    } else {
      this.times++;
    }
  }
  toString() {
    return this.state.toString()
  }
}

export default GumballMachine;
