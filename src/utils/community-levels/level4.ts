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
  path: "/community-level/4",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "C", "D", "E", "E"],
    ["A", "C", "C", "C", "D", "E", "E"],
    ["A", "B", "B", "B", "D", "D", "E"],
    ["A", "B", "B", "D", "D", "E", "E"],
    ["A", "B", "B", "D", "D", "E", "E"],
    ["A", "A", "A", "D", "F", "E", "E"],
    ["F", "F", "F", "F", "F", "F", "G"],
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
  createdBy: "AuraSponge",
  creatorLink: "https://github.com/AuraSponge",
};

export default level;
