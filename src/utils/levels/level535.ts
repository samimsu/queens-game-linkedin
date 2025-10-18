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

const level535 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "D", "D", "D", "B", "B", "B"],
    ["C", "C", "D", "D", "E", "D", "D", "B", "B"],
    ["C", "D", "D", "E", "E", "E", "D", "D", "B"],
    ["C", "D", "E", "E", "E", "E", "E", "D", "F"],
    ["C", "D", "D", "E", "E", "E", "D", "D", "F"],
    ["C", "G", "D", "D", "E", "D", "D", "H", "F"],
    ["I", "G", "G", "D", "D", "D", "H", "H", "F"],
    ["I", "I", "G", "G", "G", "H", "H", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: altoMain,
    G: lightOrchid,
    H: nomad,
    I: saharaSand,
  },
};

export default level535;
