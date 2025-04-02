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

const level236 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C", "C"],
    ["D", "A", "A", "B", "B", "B", "B", "B", "C"],
    ["D", "D", "A", "B", "B", "E", "C", "C", "C"],
    ["D", "D", "F", "F", "G", "E", "E", "C", "C"],
    ["D", "F", "F", "H", "G", "G", "E", "E", "C"],
    ["D", "F", "I", "H", "H", "G", "G", "C", "C"],
    ["D", "D", "I", "I", "H", "H", "D", "D", "D"],
    ["D", "D", "D", "I", "I", "D", "D", "D", "D"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightOrchid,
    D: saharaSand,
    E: altoMain,
    F: celadon,
    G: bittersweet,
    H: nomad,
    I: lightWisteria,
  },
};

export default level236;
