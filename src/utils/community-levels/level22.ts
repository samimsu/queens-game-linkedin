import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/22",
  size: 8,
  colorRegions: [
    ["B", "E", "E", "E", "E", "C", "C", "C"],
    ["B", "E", "E", "A", "C", "C", "C", "C"],
    ["B", "E", "A", "A", "C", "H", "H", "H"],
    ["B", "B", "A", "A", "H", "H", "H", "H"],
    ["D", "D", "H", "H", "H", "F", "G", "G"],
    ["H", "D", "H", "H", "F", "F", "G", "G"],
    ["H", "H", "H", "F", "F", "G", "G", "G"],
    ["H", "H", "F", "F", "F", "G", "G", "G"],
  ],
  regionColors: {
    A: nomad,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: halfBaked,
  },
  createdBy: "caitlinellish",
};

export default level;
