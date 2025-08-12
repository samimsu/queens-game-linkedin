import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level469 = {
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "B", "B", "C", "C", "C", "B", "B", "B"],
    ["A", "B", "B", "B", "C", "C", "C", "B", "D", "B"],
    ["A", "E", "E", "E", "D", "D", "D", "D", "D", "B"],
    ["A", "E", "E", "E", "D", "F", "F", "F", "D", "B"],
    ["A", "A", "G", "G", "G", "F", "F", "F", "D", "D"],
    ["A", "A", "G", "G", "G", "H", "I", "I", "I", "D"],
    ["A", "A", "A", "J", "J", "J", "I", "I", "I", "D"],
    ["A", "A", "A", "J", "J", "J", "D", "D", "D", "D"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: halfBaked,
    B: lightOrchid,
    C: chardonnay,
    D: nomad,
    E: lightWisteria,
    F: bittersweet,
    G: anakiwa,
    H: saharaSand,
    I: celadon,
    J: altoMain,
  },
  isNew: true,
};

export default level469;
