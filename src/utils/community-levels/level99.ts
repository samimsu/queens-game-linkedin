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
  path: "/community-level/99",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "J", "J", "J"],
    ["C", "A", "A", "B", "B", "B", "C", "I", "I", "J"],
    ["C", "C", "A", "B", "B", "C", "C", "I", "I", "I"],
    ["D", "C", "C", "C", "C", "C", "C", "C", "I", "H"],
    ["D", "D", "C", "C", "C", "C", "C", "C", "H", "H"],
    ["D", "D", "C", "C", "C", "C", "C", "H", "H", "H"],
    ["D", "D", "D", "C", "C", "C", "G", "G", "G", "H"],
    ["D", "D", "D", "D", "E", "E", "G", "G", "G", "H"],
    ["D", "D", "D", "D", "E", "E", "E", "F", "G", "G"],
    ["D", "D", "D", "D", "F", "F", "F", "F", "G", "G"],
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
  solutionsCount: 1,
  createdBy: "Zolee",
  creatorLink: "https://github.com/Zoltan-Balazs/",
};

export default level;
