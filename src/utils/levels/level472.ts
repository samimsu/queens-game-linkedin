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

const level472 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C", "C"],
    ["D", "D", "A", "B", "B", "B", "E", "E", "C"],
    ["D", "F", "F", "G", "B", "G", "E", "E", "H"],
    ["D", "F", "G", "G", "G", "G", "G", "E", "H"],
    ["D", "F", "G", "G", "G", "G", "G", "H", "H"],
    ["D", "G", "G", "G", "G", "G", "G", "G", "H"],
    ["D", "G", "G", "G", "G", "G", "G", "G", "H"],
    ["G", "G", "G", "G", "I", "I", "G", "G", "G"],
    ["G", "G", "G", "I", "I", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: saharaSand,
    G: bittersweet,
    H: nomad,
    I: anakiwa,
  },
};

export default level472;
