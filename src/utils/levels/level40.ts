import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level40 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "B", "C", "D", "B", "B", "B", "B", "B"],
    ["B", "B", "C", "C", "D", "D", "B", "B", "E", "B"],
    ["B", "B", "B", "C", "D", "B", "F", "B", "E", "E"],
    ["B", "B", "B", "B", "B", "B", "F", "F", "E", "G"],
    ["B", "B", "B", "B", "B", "B", "F", "H", "G", "G"],
    ["B", "B", "B", "B", "I", "B", "H", "H", "H", "G"],
    ["B", "B", "J", "I", "I", "B", "B", "B", "B", "B"],
    ["B", "J", "J", "J", "I", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: halfBaked,
    B: altoMain,
    C: lightWisteria,
    D: chardonnay,
    E: anakiwa,
    F: celadon,
    G: nomad,
    H: lightOrchid,
    I: saharaSand,
    J: bittersweet,
  },
};

export default level40;
