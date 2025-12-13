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

const level591 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "D", "B", "E", "B"],
    ["A", "C", "C", "C", "D", "D", "E", "E", "B"],
    ["A", "C", "C", "D", "D", "E", "E", "E", "B"],
    ["A", "C", "A", "A", "D", "D", "E", "E", "B"],
    ["A", "A", "A", "F", "D", "D", "D", "E", "B"],
    ["G", "A", "F", "F", "F", "D", "D", "H", "H"],
    ["G", "F", "F", "F", "F", "F", "D", "D", "H"],
    ["G", "I", "I", "I", "D", "D", "D", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: altoMain,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
};

export default level591;
