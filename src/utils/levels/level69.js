import {
  altoMain,
  anakiwa,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level69 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B"],
    ["C", "A", "D", "D", "A", "A", "B"],
    ["C", "A", "C", "C", "A", "B", "B"],
    ["C", "C", "C", "B", "B", "B", "B"],
    ["C", "E", "C", "C", "B", "F", "B"],
    ["C", "E", "G", "F", "F", "F", "B"],
    ["E", "E", "G", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
  },
};

export default level69;
