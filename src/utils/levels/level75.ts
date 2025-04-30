import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  saharaSand,
} from "../colors";

const level75 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "A", "A", "C", "C", "C", "B", "B", "B"],
    ["D", "A", "E", "E", "E", "E", "E", "B", "B"],
    ["D", "A", "E", "E", "E", "E", "E", "B", "B"],
    ["D", "D", "E", "E", "E", "E", "E", "B", "B"],
    ["D", "D", "E", "E", "E", "E", "E", "B", "F"],
    ["D", "G", "G", "E", "E", "E", "B", "B", "F"],
    ["D", "G", "G", "G", "H", "F", "F", "F", "F"],
    ["D", "G", "G", "G", "F", "F", "F", "I", "I"],
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
    I: saharaSand,
  },
};

export default level75;
