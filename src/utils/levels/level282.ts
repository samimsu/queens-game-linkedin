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

const level282 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "B", "B", "B", "C", "B", "B", "B"],
    ["D", "D", "D", "B", "C", "C", "C", "E", "E"],
    ["D", "B", "B", "B", "B", "B", "C", "E", "E"],
    ["D", "B", "B", "B", "B", "B", "B", "F", "E"],
    ["G", "G", "B", "B", "H", "B", "B", "F", "F"],
    ["G", "B", "B", "H", "H", "I", "B", "B", "F"],
    ["G", "G", "H", "H", "I", "I", "I", "I", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
};

export default level282;
