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

const level593 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "A", "A", "A", "C", "C"],
    ["A", "B", "B", "A", "A", "A", "C", "C", "D"],
    ["B", "B", "A", "A", "A", "C", "C", "D", "D"],
    ["B", "A", "A", "E", "A", "C", "F", "F", "D"],
    ["B", "B", "A", "E", "E", "C", "C", "F", "F"],
    ["G", "B", "B", "E", "E", "E", "C", "C", "F"],
    ["G", "G", "B", "B", "H", "E", "I", "C", "C"],
    ["G", "G", "H", "H", "H", "E", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
  isNew: true,
};

export default level593;
