import {
  altoMain,
  anakiwa,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level71 = {
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C"],
    ["A", "A", "B", "C", "C", "C", "D"],
    ["E", "E", "C", "C", "C", "D", "D"],
    ["E", "C", "C", "C", "F", "D", "G"],
    ["C", "C", "C", "F", "F", "D", "G"],
    ["C", "C", "F", "F", "D", "D", "G"],
    ["C", "G", "G", "G", "G", "G", "G"],
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

export default level71;
