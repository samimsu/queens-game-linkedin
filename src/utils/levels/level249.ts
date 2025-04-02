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

const level249 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "D", "D", "D", "E", "B"],
    ["A", "C", "C", "D", "D", "D", "D", "E", "E", "F"],
    ["G", "C", "C", "D", "D", "H", "H", "E", "H", "F"],
    ["G", "C", "D", "D", "D", "H", "H", "H", "H", "F"],
    ["G", "I", "I", "D", "H", "H", "J", "J", "J", "F"],
    ["G", "I", "D", "D", "H", "J", "J", "J", "J", "F"],
    ["G", "I", "D", "H", "H", "J", "J", "J", "J", "F"],
    ["G", "I", "H", "H", "H", "H", "J", "J", "J", "F"],
    ["G", "G", "F", "F", "F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: anakiwa,
    C: chardonnay,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: lightOrchid,
    I: nomad,
    J: halfBaked,
  },
};

export default level249;
