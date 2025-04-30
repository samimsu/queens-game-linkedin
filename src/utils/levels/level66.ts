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

const level66 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "C", "C", "C", "A"],
    ["A", "B", "D", "D", "D", "D", "C", "A"],
    ["A", "B", "D", "E", "E", "D", "C", "F"],
    ["A", "B", "D", "E", "E", "G", "C", "F"],
    ["F", "B", "D", "D", "G", "G", "H", "F"],
    ["F", "B", "B", "B", "B", "H", "H", "F"],
    ["F", "F", "F", "F", "F", "F", "F", "F"],
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

export default level66;
