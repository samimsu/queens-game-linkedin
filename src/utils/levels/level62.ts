import {
  altoMain,
  anakiwa,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level62 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "C", "C", "C", "C", "A"],
    ["A", "B", "B", "B", "B", "B", "A"],
    ["A", "A", "A", "D", "E", "B", "F"],
    ["E", "E", "E", "E", "E", "B", "F"],
    ["E", "B", "B", "B", "B", "B", "F"],
    ["E", "G", "G", "G", "F", "F", "F"],
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

export default level62;
