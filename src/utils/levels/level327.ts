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

const level327 = {
  size: 10,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "B", "B", "B", "D"],
    ["A", "A", "B", "C", "C", "B", "B", "B", "D", "D"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B", "D"],
    ["B", "B", "B", "E", "E", "B", "B", "B", "B", "B"],
    ["B", "F", "B", "B", "E", "B", "B", "G", "B", "B"],
    ["F", "F", "F", "B", "E", "B", "G", "G", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "G", "B", "B", "B"],
    ["H", "B", "B", "B", "I", "B", "B", "B", "B", "J"],
    ["H", "H", "B", "I", "I", "I", "B", "J", "J", "J"],
    ["H", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: altoMain,
    B: anakiwa,
    C: saharaSand,
    D: lightWisteria,
    E: halfBaked,
    F: celadon,
    G: bittersweet,
    H: nomad,
    I: chardonnay,
    J: lightOrchid,
  },
};

export default level327;
