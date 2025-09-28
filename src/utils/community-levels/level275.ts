import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/275",
  size: 8,
  colorRegions: [
    ["A", "C", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "C", "C", "C", "C", "C"],
    ["E", "E", "A", "A", "D", "D", "C", "C"],
    ["H", "H", "H", "H", "D", "C", "C", "G"],
    ["H", "H", "H", "H", "C", "C", "F", "G"],
    ["B", "B", "B", "B", "C", "F", "F", "G"],
    ["F", "F", "F", "F", "F", "F", "F", "G"],
    ["F", "F", "F", "F", "F", "F", "F", "F"],
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
  },
  solutionsCount: 1,
  createdBy: "Gabriel",
  creatorLink: "",
};

export default level;
