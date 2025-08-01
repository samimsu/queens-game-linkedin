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

const level = {
  path: "/community-level/172",
  size: 9,
  colorRegions: [
    ["G", "G", "H", "H", "H", "H", "H", "H", "H"],
    ["B", "G", "G", "G", "G", "C", "C", "C", "H"],
    ["B", "E", "E", "E", "G", "G", "G", "C", "H"],
    ["B", "E", "D", "D", "D", "D", "D", "D", "H"],
    ["B", "E", "E", "F", "F", "F", "D", "I", "H"],
    ["B", "B", "E", "E", "E", "D", "D", "I", "H"],
    ["B", "A", "I", "I", "I", "I", "I", "I", "H"],
    ["B", "A", "I", "I", "H", "H", "H", "H", "H"],
    ["B", "B", "B", "I", "I", "I", "I", "I", "I"],
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
  },
  solutionsCount: 1,
  createdBy: "Alex bzk",
  creatorLink: "",
};

export default level;
