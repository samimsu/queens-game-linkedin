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
  path: "/community-level/437",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "I", "I", "I", "I", "G", "G"],
    ["A", "A", "I", "I", "I", "G", "H", "H", "G"],
    ["A", "A", "A", "E", "E", "G", "H", "G", "G"],
    ["B", "B", "A", "E", "E", "G", "G", "G", "G"],
    ["B", "B", "A", "D", "D", "D", "G", "G", "D"],
    ["B", "B", "A", "A", "A", "D", "D", "D", "D"],
    ["B", "B", "A", "A", "A", "A", "A", "A", "D"],
    ["B", "B", "A", "B", "C", "C", "F", "F", "D"],
    ["B", "B", "B", "B", "C", "C", "F", "F", "F"],
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
  createdBy: "snaotheus",
  creatorLink: "",
};

export default level;
