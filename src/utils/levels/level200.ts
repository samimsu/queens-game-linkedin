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
  turquoiseBlue,
} from "../colors";

const level200 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["C", "C", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "B", "B", "D", "D", "D", "B", "E", "E", "B"],
    ["A", "A", "A", "B", "D", "F", "D", "B", "B", "E", "B"],
    ["G", "G", "G", "B", "D", "F", "D", "E", "E", "E", "B"],
    ["G", "B", "B", "B", "D", "F", "D", "E", "H", "H", "H"],
    ["G", "B", "I", "I", "D", "D", "D", "E", "H", "J", "H"],
    ["G", "B", "I", "B", "K", "K", "E", "E", "H", "J", "H"],
    ["G", "B", "I", "B", "B", "K", "K", "E", "H", "J", "H"],
    ["B", "B", "B", "B", "B", "K", "E", "E", "H", "H", "H"],
  ],
  regionColors: {
    A: anakiwa,
    B: lightOrchid,
    C: lightWisteria,
    D: turquoiseBlue,
    E: altoMain,
    F: saharaSand,
    G: bittersweet,
    H: halfBaked,
    I: chardonnay,
    J: nomad,
    K: celadon,
  },
};

export default level200;
