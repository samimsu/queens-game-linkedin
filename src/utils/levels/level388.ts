import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level388 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "C", "C", "C", "D", "D", "D"],
    ["A", "B", "B", "E", "C", "D", "D", "D", "D"],
    ["A", "B", "E", "E", "C", "F", "F", "D", "D"],
    ["A", "B", "E", "G", "G", "G", "F", "F", "D"],
    ["A", "B", "E", "E", "G", "F", "F", "D", "D"],
    ["A", "B", "B", "E", "G", "F", "H", "D", "D"],
    ["A", "B", "B", "I", "I", "I", "H", "H", "D"],
    ["A", "A", "B", "B", "I", "H", "H", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: nomad,
    D: lightOrchid,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: anakiwa,
    I: celadon,
  },
  isNew: true,
};

export default level388;
