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

const level55 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "C", "C", "C"],
    ["B", "A", "A", "B", "B", "C", "C", "B"],
    ["B", "B", "A", "B", "B", "C", "B", "B"],
    ["D", "B", "B", "B", "B", "B", "B", "E"],
    ["D", "F", "F", "E", "E", "E", "E", "E"],
    ["D", "F", "G", "E", "D", "H", "E", "E"],
    ["D", "F", "G", "E", "D", "H", "E", "E"],
    ["D", "D", "D", "D", "D", "D", "D", "E"],
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

export default level55;
