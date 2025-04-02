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

const level58 = {
  size: 8,
  colorRegions: [
    ["A", "B", "C", "C", "C", "D", "A", "E"],
    ["A", "B", "B", "C", "D", "D", "A", "E"],
    ["A", "B", "F", "F", "F", "D", "A", "E"],
    ["A", "A", "A", "F", "A", "A", "A", "E"],
    ["G", "A", "A", "A", "A", "A", "H", "E"],
    ["G", "G", "H", "H", "H", "H", "H", "E"],
    ["G", "G", "G", "H", "E", "E", "E", "E"],
    ["G", "G", "G", "G", "G", "G", "G", "E"],
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

export default level58;
