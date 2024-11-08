import {
  altoMain,
  anakiwa,
  celadon,
  chardonnay,
  halfBaked,
  lavenderRose,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level39 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C", "C", "C", "C"],
    ["D", "D", "A", "A", "B", "C", "C", "C", "C", "C", "C"],
    ["E", "D", "F", "F", "B", "C", "C", "C", "C", "C", "C"],
    ["E", "D", "D", "F", "B", "C", "C", "C", "C", "C", "C"],
    ["E", "E", "E", "F", "F", "C", "C", "C", "C", "C", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["C", "C", "C", "C", "C", "C", "G", "H", "H", "H", "H"],
    ["C", "C", "C", "C", "C", "C", "G", "G", "G", "H", "I"],
    ["C", "C", "C", "C", "C", "C", "J", "K", "G", "K", "I"],
    ["C", "C", "C", "C", "C", "C", "J", "K", "K", "K", "I"],
    ["C", "C", "C", "C", "C", "C", "J", "J", "J", "I", "I"],
  ],
  regionColors: {
    A: celadon,
    B: anakiwa,
    C: altoMain,
    D: lightOrchid,
    E: chardonnay,
    F: lightWisteria,
    G: halfBaked,
    H: lavenderRose,
    I: turquoiseBlue,
    J: nomad,
    K: saharaSand,
  },
};

export default level39;
