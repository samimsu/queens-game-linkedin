import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/286",
  size: 7,
  colorRegions: [
    ["A", "F", "F", "G", "G", "G", "G"],
    ["A", "A", "F", "G", "G", "G", "G"],
    ["G", "A", "A", "E", "E", "G", "G"],
    ["G", "C", "A", "A", "E", "G", "G"],
    ["G", "C", "C", "A", "A", "D", "D"],
    ["G", "G", "G", "B", "A", "A", "D"],
    ["G", "G", "G", "B", "B", "A", "A"],
  ],
  regionColors: {
    A: turquoiseBlue,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "Virgil",
  creatorLink: "",
};

export default level;
