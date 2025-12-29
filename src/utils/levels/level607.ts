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

const level607 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "C"],
    ["A", "D", "D", "A", "B", "C", "E", "E", "C"],
    ["A", "A", "D", "A", "B", "C", "E", "C", "C"],
    ["F", "A", "A", "A", "B", "C", "C", "C", "F"],
    ["F", "F", "G", "G", "B", "F", "F", "F", "F"],
    ["F", "F", "F", "B", "B", "B", "F", "F", "F"],
    ["F", "H", "F", "F", "F", "F", "F", "H", "F"],
    ["F", "H", "H", "H", "H", "H", "H", "H", "I"],
    ["F", "F", "H", "H", "H", "H", "H", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: lightOrchid,
    I: nomad,
  },
};

export default level607;
