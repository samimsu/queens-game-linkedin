import {
  altoMain,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  turquoiseBlue,
} from "../colors";

const level46 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "A", "A", "A", "C", "B", "B", "D"],
    ["A", "E", "E", "A", "C", "C", "D", "D"],
    ["E", "E", "F", "A", "A", "C", "D", "A"],
    ["A", "F", "F", "A", "A", "A", "A", "A"],
    ["A", "F", "G", "G", "A", "A", "A", "A"],
    ["A", "G", "G", "A", "A", "H", "H", "A"],
    ["A", "A", "A", "A", "A", "A", "H", "H"],
  ],
  regionColors: {
    A: chardonnay,
    B: bittersweet,
    C: celadon,
    D: halfBaked,
    E: lightWisteria,
    F: turquoiseBlue,
    G: altoMain,
    H: lightOrchid,
  },
};

export default level46;
