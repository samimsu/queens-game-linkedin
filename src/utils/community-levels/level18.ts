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

const level = {
  path: "/community-level/18",
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "B", "D", "D", "D", "C", "C", "C", "C", "B"],
    ["A", "B", "D", "E", "D", "D", "D", "D", "C", "B"],
    ["A", "B", "D", "E", "E", "G", "G", "B", "C", "B"],
    ["A", "B", "D", "A", "E", "E", "G", "B", "B", "B"],
    ["A", "B", "D", "A", "F", "E", "G", "G", "G", "G"],
    ["A", "D", "D", "A", "F", "E", "H", "H", "H", "G"],
    ["A", "D", "A", "A", "F", "H", "H", "I", "I", "G"],
    ["A", "D", "A", "F", "F", "J", "J", "J", "I", "G"],
    ["A", "A", "A", "G", "G", "G", "G", "G", "G", "G"],
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
  },
  createdBy: "Bobinzo",
};

export default level;
