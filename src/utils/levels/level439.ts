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

const level439 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "C", "C"],
    ["D", "A", "B", "B", "B", "B", "B", "C", "C"],
    ["A", "A", "A", "B", "B", "B", "B", "C", "C"],
    ["E", "E", "F", "G", "G", "G", "B", "B", "B"],
    ["E", "E", "F", "F", "G", "B", "B", "B", "B"],
    ["E", "F", "F", "G", "G", "G", "B", "B", "B"],
    ["E", "E", "F", "F", "F", "F", "H", "H", "H"],
    ["E", "E", "F", "F", "F", "F", "F", "H", "I"],
    ["E", "E", "F", "F", "F", "F", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: lightOrchid,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: anakiwa,
  },
  isNew: true,
};

export default level439;
