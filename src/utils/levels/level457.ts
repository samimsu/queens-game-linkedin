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

const level457 = {
  size: 9,
  colorRegions: [
    ["A", "B", "C", "C", "D", "D", "D", "D", "D"],
    ["B", "B", "B", "C", "C", "D", "D", "D", "D"],
    ["E", "B", "E", "F", "F", "F", "D", "D", "D"],
    ["E", "E", "E", "E", "F", "D", "D", "D", "D"],
    ["E", "E", "G", "G", "G", "G", "G", "D", "D"],
    ["E", "G", "G", "G", "G", "G", "H", "H", "D"],
    ["E", "G", "G", "G", "G", "G", "G", "H", "I"],
    ["E", "E", "G", "G", "G", "G", "G", "I", "I"],
    ["E", "E", "E", "E", "E", "E", "I", "I", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: altoMain,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level457;
