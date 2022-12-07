class Wash {
  startWash() {
    console.log("세탁 시작");
  }
}

class Rinse {
  startRinse() {
    console.log("행굼 시작");
  }
}

class SpanDry {
  startDry() {
    console.log("탈수 시작");
  }
}

export class Washer {
  #wash: Wash;
  #rinse: Rinse;
  #spanDry: SpanDry;

  constructor() {
    this.#wash = new Wash();
    this.#rinse = new Rinse();
    this.#spanDry = new SpanDry();
  }

  start() {
    this.#wash.startWash();
    this.#rinse.startRinse();
    this.#spanDry.startDry();
  }
}
