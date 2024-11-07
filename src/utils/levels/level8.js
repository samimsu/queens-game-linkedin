import {
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  saharaSand,
} from "../colors";

const level8 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C"],
    ["A", "B", "B", "D", "D", "B", "B", "C"],
    ["A", "B", "D", "D", "D", "D", "B", "C"],
    ["E", "B", "D", "D", "F", "D", "B", "C"],
    ["E", "B", "B", "D", "F", "F", "B", "C"],
    ["E", "E", "B", "B", "B", "F", "F", "C"],
    ["E", "E", "E", "E", "E", "G", "F", "H"],
    ["E", "E", "E", "G", "G", "G", "H", "H"],
  ],
  regionColors: {
    A: chardonnay,
    B: lightWisteria,
    C: saharaSand,
    D: halfBaked,
    E: lightOrchid,
    F: anakiwa,
    G: celadon,
    H: bittersweet,
  },
};

export default level8;
