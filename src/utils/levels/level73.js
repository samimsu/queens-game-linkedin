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

const level73 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C", "C"],
    ["A", "D", "D", "B", "B", "B", "B", "C"],
    ["B", "D", "E", "E", "E", "E", "B", "B"],
    ["B", "B", "E", "F", "F", "F", "F", "B"],
    ["B", "B", "E", "F", "G", "G", "B", "B"],
    ["B", "B", "E", "F", "G", "H", "H", "B"],
    ["B", "B", "B", "F", "B", "H", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B"],
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

export default level73;
