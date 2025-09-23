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

const level510 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C", "D", "D"],
    ["A", "E", "E", "E", "B", "E", "E", "C", "E", "D"],
    ["A", "A", "A", "E", "B", "E", "C", "C", "E", "D"],
    ["A", "E", "E", "E", "E", "E", "E", "C", "E", "F"],
    ["A", "E", "G", "E", "E", "E", "E", "E", "E", "F"],
    ["G", "G", "G", "E", "E", "E", "E", "F", "F", "F"],
    ["G", "E", "E", "E", "E", "E", "E", "E", "E", "F"],
    ["H", "H", "H", "E", "H", "E", "I", "I", "E", "J"],
    ["H", "E", "E", "E", "H", "E", "E", "I", "E", "J"],
    ["H", "H", "H", "H", "H", "I", "I", "I", "J", "J"],
  ],
  regionColors: {
    A: anakiwa,
    B: chardonnay,
    C: lightWisteria,
    D: celadon,
    E: lightOrchid,
    F: saharaSand,
    G: bittersweet,
    H: halfBaked,
    I: altoMain,
    J: nomad,
  },
};

export default level510;
