import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/192",
  size: 6,
  colorRegions: [
    ["F", "E", "E", "E", "E", "E"],
    ["F", "A", "A", "A", "E", "A"],
    ["F", "A", "B", "E", "E", "A"],
    ["F", "C", "B", "A", "A", "D"],
    ["F", "C", "C", "D", "D", "D"],
    ["F", "F", "C", "C", "C", "D"],
  ],
  regionColors: {
    A: saharaSand,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "Sander",
  creatorLink: "",
};

export default level;
