import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level109 = {
  size: 8,
  colorRegions: [
    ["A", "B", "C", "D", "E", "E", "E", "E"],
    ["A", "B", "C", "D", "F", "G", "G", "E"],
    ["A", "B", "C", "D", "F", "F", "G", "E"],
    ["A", "B", "C", "D", "D", "F", "F", "E"],
    ["B", "B", "C", "C", "D", "D", "D", "D"],
    ["B", "B", "C", "C", "C", "C", "C", "D"],
    ["B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "B", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
    H: bittersweet,
  },
};

export default level109;
