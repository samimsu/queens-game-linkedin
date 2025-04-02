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

const level270 = {
  size: 10,
  colorRegions: [
    ["A", "B", "C", "C", "C", "C", "C", "C", "D", "D"],
    ["B", "B", "B", "C", "C", "C", "E", "C", "D", "D"],
    ["C", "B", "C", "C", "C", "C", "E", "C", "D", "D"],
    ["C", "C", "C", "C", "E", "E", "E", "E", "E", "F"],
    ["C", "C", "C", "C", "C", "C", "E", "F", "F", "F"],
    ["C", "C", "C", "C", "G", "G", "E", "G", "G", "F"],
    ["C", "H", "C", "C", "G", "G", "G", "G", "I", "F"],
    ["H", "H", "H", "G", "G", "G", "G", "I", "I", "I"],
    ["J", "H", "J", "J", "G", "G", "G", "G", "I", "G"],
    ["J", "J", "J", "G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: halfBaked,
    H: lightOrchid,
    I: nomad,
    J: saharaSand,
  },
};

export default level270;
