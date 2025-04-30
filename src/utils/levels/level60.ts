import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level60 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C"],
    ["A", "D", "D", "D", "D", "B", "C", "C"],
    ["E", "D", "D", "D", "D", "B", "C", "C"],
    ["E", "D", "D", "D", "D", "B", "B", "B"],
    ["E", "E", "E", "D", "D", "D", "D", "F"],
    ["G", "G", "H", "D", "D", "D", "D", "F"],
    ["G", "G", "H", "D", "D", "D", "D", "F"],
    ["G", "G", "H", "H", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: celadon,
    B: altoMain,
    C: lightOrchid,
    D: chardonnay,
    E: lightWisteria,
    F: anakiwa,
    G: halfBaked,
    H: bittersweet,
  },
};

export default level60;
