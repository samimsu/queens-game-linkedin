import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/102",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "A", "A", "A", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C"],
    ["A", "C", "E", "E", "D", "D", "D"],
    ["A", "C", "E", "G", "D", "F", "F"],
    ["A", "A", "E", "G", "D", "G", "F"],
    ["A", "A", "E", "G", "G", "G", "F"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "Lorrington",
  creatorLink: "https://github.com/Lorrington",
};

export default level;
