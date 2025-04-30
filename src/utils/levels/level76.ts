import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level76 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "C", "C", "C", "D", "B", "B"],
    ["E", "E", "E", "C", "D", "D", "F", "F"],
    ["E", "E", "E", "C", "D", "F", "F", "F"],
    ["E", "E", "G", "G", "F", "F", "F", "F"],
    ["E", "E", "G", "F", "F", "F", "F", "F"],
    ["H", "H", "F", "F", "F", "F", "F", "F"],
    ["H", "H", "F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
    H: bittersweet,
  },
};

export default level76;
