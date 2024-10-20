import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  malibu,
  nomad,
  saharaSand,
} from "../colors";

const level100 = {
  size: 11,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C", "C", "D", "D", "D"],
    ["A", "A", "B", "B", "E", "E", "E", "C", "D", "F", "D"],
    ["A", "A", "G", "B", "E", "H", "E", "C", "D", "F", "D"],
    ["A", "G", "G", "B", "E", "H", "E", "C", "D", "F", "D"],
    ["A", "A", "G", "B", "E", "H", "E", "C", "D", "D", "D"],
    ["A", "A", "G", "B", "E", "E", "E", "I", "I", "I", "I"],
    ["A", "A", "G", "B", "B", "I", "I", "I", "A", "A", "A"],
    ["A", "A", "I", "I", "I", "I", "A", "A", "A", "A", "J"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "J", "J", "J"],
    ["A", "A", "A", "A", "A", "J", "J", "J", "J", "F", "F"],
    ["A", "A", "J", "J", "J", "J", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: anakiwa,
    B: nomad,
    C: malibu,
    D: celadon,
    E: chardonnay,
    F: lightWisteria,
    G: saharaSand,
    H: altoMain,
    I: lightOrchid,
    J: bittersweet,
  },
};

export default level100;