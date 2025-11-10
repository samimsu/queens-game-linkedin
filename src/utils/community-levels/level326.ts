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
  path: "/community-level/326",
  size: 10,
  colorRegions: [
    ["H", "H", "H", "H", "H", "H", "H", "H", "H", "H"],
    ["H", "C", "A", "A", "H", "H", "F", "B", "B", "H"],
    ["H", "C", "A", "G", "H", "F", "F", "B", "B", "B"],
    ["H", "H", "A", "G", "H", "D", "D", "D", "B", "B"],
    ["H", "H", "A", "G", "G", "I", "B", "B", "B", "B"],
    ["H", "H", "A", "A", "G", "I", "B", "B", "B", "B"],
    ["H", "A", "A", "J", "E", "E", "E", "E", "E", "B"],
    ["H", "A", "J", "J", "J", "J", "J", "J", "E", "B"],
    ["H", "A", "A", "A", "E", "E", "E", "E", "E", "B"],
    ["H", "H", "H", "H", "H", "H", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: saharaSand,
    G: bittersweet,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
  },
  solutionsCount: 1,
  createdBy: "Alierra",
  creatorLink: "",
};

export default level;
