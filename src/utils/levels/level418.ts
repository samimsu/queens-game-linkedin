import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level418 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "B", "C", "B", "B", "B", "B", "B"],
    ["D", "A", "A", "C", "B", "B", "B", "B", "B"],
    ["D", "D", "C", "C", "E", "B", "B", "B", "B"],
    ["D", "F", "F", "C", "E", "E", "B", "B", "B"],
    ["D", "D", "F", "F", "G", "E", "E", "B", "B"],
    ["D", "D", "F", "G", "G", "G", "B", "B", "H"],
    ["D", "D", "D", "D", "G", "I", "B", "B", "H"],
    ["D", "D", "I", "I", "I", "I", "H", "H", "H"],
  ],
  regionColors: {
    A: lightOrchid,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: lightWisteria,
  },
};

export default level418;
