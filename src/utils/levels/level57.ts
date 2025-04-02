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

const level57 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "C", "C", "D", "D", "E", "E"],
    ["B", "F", "C", "G", "D", "F", "E", "F"],
    ["F", "F", "C", "G", "D", "F", "E", "F"],
    ["F", "F", "G", "G", "D", "F", "E", "F"],
    ["F", "F", "F", "F", "F", "F", "E", "F"],
    ["F", "H", "F", "F", "F", "F", "F", "F"],
    ["F", "H", "H", "H", "H", "H", "F", "F"],
  ],
  regionColors: {
    A: anakiwa,
    B: lightWisteria,
    C: lightOrchid,
    D: halfBaked,
    E: celadon,
    F: chardonnay,
    G: bittersweet,
    H: altoMain,
  },
};

export default level57;
