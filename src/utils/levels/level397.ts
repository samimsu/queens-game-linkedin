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

const level397 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "B"],
    ["D", "C", "E", "E", "E", "E", "E", "C", "B"],
    ["D", "C", "E", "C", "C", "C", "E", "C", "B"],
    ["D", "C", "E", "C", "F", "F", "F", "C", "B"],
    ["D", "C", "C", "C", "F", "C", "C", "C", "G"],
    ["D", "D", "C", "F", "F", "H", "H", "C", "G"],
    ["I", "C", "C", "C", "C", "H", "C", "C", "G"],
    ["I", "I", "I", "I", "C", "H", "C", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: lightOrchid,
    G: saharaSand,
    H: nomad,
    I: altoMain,
  },
  isNew: true,
};

export default level397;
