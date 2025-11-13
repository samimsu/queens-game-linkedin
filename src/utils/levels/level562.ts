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

const level562 = {
  size: 9,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "C", "C"],
    ["D", "B", "B", "E", "E", "E", "B", "B", "C"],
    ["D", "B", "E", "E", "E", "E", "E", "B", "C"],
    ["F", "B", "B", "E", "E", "E", "B", "B", "C"],
    ["F", "F", "B", "B", "E", "B", "B", "C", "C"],
    ["F", "F", "F", "B", "B", "B", "C", "C", "C"],
    ["F", "F", "F", "F", "G", "C", "C", "C", "C"],
    ["F", "F", "H", "H", "G", "I", "I", "C", "C"],
    ["F", "H", "H", "H", "G", "I", "I", "I", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: bittersweet,
    F: altoMain,
    G: saharaSand,
    H: nomad,
    I: chardonnay,
  },
  isNew: true,
};

export default level562;
