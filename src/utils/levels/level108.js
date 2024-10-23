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

const level108 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C"],
    ["A", "A", "A", "A", "B", "D", "D", "C"],
    ["A", "A", "A", "A", "B", "D", "D", "C"],
    ["E", "A", "A", "A", "A", "D", "F", "F"],
    ["E", "E", "A", "A", "A", "A", "A", "F"],
    ["G", "E", "H", "A", "A", "A", "A", "A"],
    ["G", "G", "H", "H", "A", "A", "A", "A"],
    ["G", "G", "G", "H", "H", "A", "A", "A"],
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

export default level108;
