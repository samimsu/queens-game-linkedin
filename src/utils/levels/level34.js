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

const level34 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["C", "C", "C", "C", "C", "C", "A", "A"],
    ["C", "D", "D", "D", "D", "D", "D", "E"],
    ["D", "D", "E", "E", "E", "E", "E", "E"],
    ["D", "E", "E", "F", "F", "F", "F", "F"],
    ["F", "F", "F", "F", "F", "G", "G", "G"],
    ["F", "G", "G", "G", "G", "G", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: chardonnay,
    D: anakiwa,
    E: celadon,
    F: altoMain,
    G: lightOrchid,
    H: halfBaked,
  },
};

export default level34;
