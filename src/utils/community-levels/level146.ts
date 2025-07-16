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
  path: "/community-level/146",
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "D", "D", "D", "D", "D", "D", "B"],
    ["C", "A", "A", "F", "F", "F", "F", "D", "B"],
    ["C", "E", "A", "A", "H", "H", "F", "D", "B"],
    ["C", "E", "G", "A", "A", "H", "F", "D", "B"],
    ["C", "E", "G", "I", "A", "A", "F", "D", "B"],
    ["C", "E", "G", "I", "I", "A", "A", "D", "B"],
    ["C", "E", "E", "E", "E", "E", "A", "A", "B"],
    ["C", "C", "C", "C", "C", "C", "C", "A", "A"],
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
  solutionsCount: 40,
  createdBy: "Marion",
  creatorLink: "",
};

export default level;
