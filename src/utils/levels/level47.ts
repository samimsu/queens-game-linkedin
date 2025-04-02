import {
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

const level47 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "A", "B", "B", "A", "A", "A", "A"],
    ["A", "C", "C", "A", "B", "B", "A", "D", "D", "A"],
    ["A", "C", "C", "E", "E", "A", "A", "D", "D", "A"],
    ["A", "F", "F", "E", "E", "A", "G", "G", "G", "A"],
    ["A", "F", "F", "A", "A", "A", "G", "G", "G", "A"],
    ["H", "H", "H", "H", "A", "A", "G", "G", "G", "A"],
    ["H", "H", "H", "H", "A", "I", "I", "J", "J", "A"],
    ["H", "H", "H", "H", "A", "I", "I", "J", "J", "A"],
    ["H", "H", "H", "H", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: chardonnay,
    B: saharaSand,
    C: nomad,
    D: bittersweet,
    E: turquoiseBlue,
    F: celadon,
    G: lightOrchid,
    H: anakiwa,
    I: halfBaked,
    J: lightWisteria,
  },
};

export default level47;
