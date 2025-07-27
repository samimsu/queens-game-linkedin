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

const level452 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C", "C"],
    ["A", "D", "D", "D", "B", "B", "B", "D", "C"],
    ["A", "D", "D", "D", "D", "B", "D", "D", "C"],
    ["E", "D", "D", "D", "D", "D", "D", "F", "C"],
    ["E", "E", "E", "D", "D", "D", "D", "F", "F"],
    ["E", "D", "D", "D", "D", "D", "D", "D", "F"],
    ["G", "D", "D", "D", "D", "D", "H", "D", "I"],
    ["G", "D", "D", "D", "D", "H", "H", "H", "I"],
    ["G", "G", "G", "G", "G", "H", "I", "I", "I"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: lightOrchid,
    E: bittersweet,
    F: altoMain,
    G: celadon,
    H: nomad,
    I: saharaSand,
  },
};

export default level452;
