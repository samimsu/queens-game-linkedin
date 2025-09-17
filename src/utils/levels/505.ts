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

const level1 = {
  size: 11,
  colorRegions: [
    ["A", "B", "C", "B", "D", "D", "D", "E", "E", "E", "F"],
    ["A", "B", "C", "B", "D", "F", "D", "E", "G", "E", "F"],
    ["A", "B", "B", "B", "D", "F", "D", "E", "G", "E", "F"],
    ["A", "B", "D", "B", "D", "F", "D", "E", "E", "E", "F"],
    ["A", "B", "D", "B", "D", "F", "D", "E", "F", "E", "F"],
    ["A", "D", "D", "D", "D", "F", "F", "F", "F", "F", "F"],
    ["D", "D", "H", "H", "H", "F", "I", "F", "F", "F", "F"],
    ["D", "D", "H", "J", "H", "F", "I", "I", "I", "F", "F"],
    ["D", "D", "H", "H", "H", "F", "I", "I", "I", "F", "F"],
    ["D", "D", "H", "H", "F", "F", "I", "I", "I", "K", "F"],
    ["D", "D", "H", "H", "H", "F", "I", "K", "K", "K", "K"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
    K: turquoiseBlue,
  },
  isNew: true,
};

export default level505;
