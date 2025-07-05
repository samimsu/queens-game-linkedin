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

const level430 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "D", "D", "B", "B", "B", "B"],
    ["A", "D", "A", "D", "E", "B", "B", "B", "B"],
    ["A", "D", "A", "D", "E", "B", "F", "F", "F"],
    ["D", "D", "D", "D", "E", "G", "F", "H", "F"],
    ["D", "D", "E", "E", "E", "G", "F", "H", "H"],
    ["D", "D", "D", "I", "I", "G", "F", "H", "F"],
    ["D", "D", "D", "D", "I", "I", "F", "F", "F"],
  ],
  regionColors: {
    A: lightOrchid,
    B: anakiwa,
    C: chardonnay,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
  },
};

export default level430;
