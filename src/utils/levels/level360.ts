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

const level360 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "A", "C", "C", "C", "D", "A"],
    ["A", "A", "B", "A", "A", "C", "D", "D", "D"],
    ["A", "A", "B", "A", "A", "A", "D", "E", "E"],
    ["F", "A", "B", "B", "B", "B", "B", "B", "E"],
    ["F", "A", "B", "B", "B", "B", "B", "E", "E"],
    ["F", "G", "B", "B", "B", "B", "B", "E", "H"],
    ["F", "G", "B", "B", "B", "B", "B", "E", "H"],
    ["F", "F", "B", "I", "I", "I", "B", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: celadon,
    C: anakiwa,
    D: bittersweet,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level360;
