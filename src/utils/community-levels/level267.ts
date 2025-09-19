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
  path: "/community-level/267",
  size: 7,
  colorRegions: [
    ["F", "F", "F", "F", "F", "B", "B"],
    ["F", "D", "F", "F", "F", "F", "F"],
    ["D", "D", "D", "D", "F", "G", "G"],
    ["F", "F", "E", "E", "F", "G", "F"],
    ["A", "F", "F", "E", "G", "G", "F"],
    ["A", "F", "F", "E", "F", "F", "C"],
    ["A", "A", "F", "E", "F", "C", "C"],
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
  createdBy: "Aylith",
  creatorLink: "https://github.com/NatalieAnselmi",
};

export default level;
