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

const level122 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "A", "A", "A", "C", "C", "A"],
    ["B", "B", "D", "D", "E", "E", "C", "C"],
    ["B", "B", "B", "D", "E", "C", "C", "C"],
    ["B", "F", "B", "G", "H", "C", "C", "C"],
    ["F", "F", "G", "G", "H", "H", "H", "C"],
    ["F", "F", "F", "F", "F", "F", "H", "C"],
    ["F", "C", "C", "C", "C", "C", "C", "C"],
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

export default level122;
