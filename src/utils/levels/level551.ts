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

const level551 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "C", "C", "D", "E", "E", "E"],
    ["A", "B", "B", "C", "D", "D", "F", "E", "G"],
    ["A", "A", "B", "C", "C", "D", "F", "E", "G"],
    ["H", "A", "B", "C", "F", "F", "F", "E", "G"],
    ["A", "A", "B", "C", "C", "F", "F", "E", "G"],
    ["B", "B", "B", "B", "B", "F", "F", "G", "G"],
    ["B", "B", "B", "B", "B", "F", "I", "I", "I"],
    ["B", "B", "B", "B", "I", "I", "I", "I", "I"],
    ["B", "B", "B", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
  isNew: true,
};

export default level551;
