import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/443",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "G", "G", "G"],
    ["A", "B", "F", "G", "G", "G", "E"],
    ["B", "B", "F", "G", "G", "E", "E"],
    ["C", "B", "F", "F", "G", "E", "E"],
    ["C", "D", "F", "F", "F", "E", "E"],
    ["C", "D", "D", "D", "E", "E", "E"],
    ["C", "C", "E", "E", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "owenhodkinson",
  creatorLink: "",
};

export default level;
