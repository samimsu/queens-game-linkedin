import {
  altoMain,
  anakiwa,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level56 = {
  size: 7,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "C", "C", "C", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "B"],
    ["A", "D", "E", "E", "E", "F", "B"],
    ["A", "D", "D", "D", "F", "F", "B"],
    ["A", "A", "D", "D", "F", "G", "B"],
    ["A", "A", "A", "G", "G", "G", "B"],
  ],
  regionColors: {
    A: halfBaked,
    B: anakiwa,
    C: lightOrchid,
    D: chardonnay,
    E: altoMain,
    F: lightWisteria,
    G: celadon,
  },
};

export default level56;
