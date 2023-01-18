import { BeatModel } from "./BeatModel";

const beatModel = new BeatModel();
beatModel.initialize();
beatModel.on();
beatModel.run();
setTimeout(() => {
  beatModel.off();
}, 5000);
