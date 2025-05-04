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

const level369 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C", "C"],
    ["D", "A", "B", "B", "B", "B", "B", "C", "C"],
    ["D", "A", "B", "E", "B", "B", "B", "B", "C"],
    ["D", "A", "B", "E", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "E", "E", "E", "F", "F", "F"],
    ["G", "G", "G", "G", "H", "E", "F", "I", "F"],
    ["G", "G", "G", "H", "H", "E", "F", "F", "F"],
    ["G", "G", "H", "H", "E", "E", "E", "E", "F"],
    ["G", "E", "E", "E", "E", "E", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
};

export default level369;
