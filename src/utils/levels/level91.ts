import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  malibu,
  saharaSand,
} from "../colors";

const level91 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "C"],
    ["D", "E", "A", "A", "F", "B", "B", "B", "C"],
    ["D", "E", "E", "F", "F", "F", "B", "B", "C"],
    ["D", "D", "E", "F", "F", "F", "C", "C", "C"],
    ["D", "G", "F", "F", "F", "F", "F", "C", "H"],
    ["G", "G", "F", "F", "F", "F", "F", "H", "H"],
    ["G", "F", "F", "F", "F", "F", "F", "F", "H"],
    ["F", "F", "F", "F", "I", "F", "F", "F", "F"],
    ["F", "F", "I", "I", "I", "I", "I", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: malibu,
    H: bittersweet,
    I: saharaSand,
  },
};

export default level91;
