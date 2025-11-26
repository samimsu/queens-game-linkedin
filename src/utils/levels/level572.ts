import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level572 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "C", "C", "D", "D", "D", "D"],
    ["A", "A", "B", "C", "C", "C", "C", "D", "D"],
    ["A", "B", "B", "C", "E", "C", "C", "C", "E"],
    ["A", "B", "B", "C", "E", "E", "C", "C", "E"],
    ["F", "B", "B", "C", "C", "E", "C", "E", "E"],
    ["F", "F", "B", "B", "B", "E", "E", "E", "G"],
    ["F", "F", "F", "H", "B", "B", "E", "E", "G"],
    ["I", "I", "F", "H", "H", "E", "E", "G", "G"],
    ["I", "I", "I", "I", "H", "H", "H", "G", "G"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: lightOrchid,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
    I: celadon,
  },
};

export default level572;
