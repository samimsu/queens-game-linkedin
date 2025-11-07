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

const level556 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "C", "C", "D", "D", "D"],
    ["A", "A", "B", "B", "B", "C", "C", "C", "D"],
    ["A", "B", "B", "B", "B", "C", "C", "C", "D"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "D"],
    ["E", "B", "B", "B", "F", "F", "F", "B", "D"],
    ["E", "E", "E", "B", "F", "F", "F", "B", "D"],
    ["G", "H", "E", "B", "F", "F", "F", "B", "D"],
    ["G", "H", "E", "B", "B", "B", "B", "B", "I"],
    ["G", "H", "H", "H", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
  isNew: true,
};

export default level556;
