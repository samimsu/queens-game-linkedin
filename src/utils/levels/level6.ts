import {
  altoMain,
  anakiwa,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level6 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "B", "C", "B", "B", "B"],
    ["B", "D", "B", "C", "B", "E", "B"],
    ["B", "D", "F", "F", "F", "E", "B"],
    ["B", "F", "F", "F", "F", "F", "G"],
    ["B", "B", "B", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightOrchid,
    B: altoMain,
    C: celadon,
    D: lightWisteria,
    E: anakiwa,
    F: chardonnay,
    G: halfBaked,
  },
};

export default level6;
