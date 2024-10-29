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

const level70 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "C", "C", "B", "B", "B"],
    ["D", "A", "A", "E", "E", "B", "B", "B"],
    ["D", "D", "A", "E", "E", "F", "B", "B"],
    ["A", "D", "A", "E", "E", "F", "F", "B"],
    ["A", "A", "A", "E", "E", "G", "G", "B"],
    ["A", "A", "E", "E", "E", "E", "G", "B"],
    ["A", "A", "E", "H", "H", "E", "G", "G"],
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

export default level70;
