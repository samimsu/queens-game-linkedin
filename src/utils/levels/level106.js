import {
  altoMain,
  anakiwa,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level106 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "B", "B", "B", "B", "C"],
    ["D", "E", "F", "F", "C", "C", "C"],
    ["D", "E", "F", "G", "G", "C", "C"],
    ["D", "E", "F", "G", "C", "C", "C"],
    ["D", "D", "D", "G", "C", "C", "C"],
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

export default level106;
