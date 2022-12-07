interface Turkey {
  gobble();
  fly();
}

export class WhildTurkey implements Turkey {
  gobble() {
    console.log('골골F')
  }
  fly() {
    console.log('훨훨')
  }

}
export default Turkey;
