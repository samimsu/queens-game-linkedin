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
  path: "/community-level/129",
  size: 7,
  colorRegions: [
    ["D", "D", "D", "E", "E", "E", "E"],
    ["D", "F", "F", "E", "E", "E", "E"],
    ["F", "E", "E", "E", "C", "E", "A"],
    ["F", "F", "E", "C", "C", "C", "A"],
    ["G", "E", "C", "C", "A", "A", "A"],
    ["G", "E", "E", "C", "A", "A", "B"],
    ["G", "G", "G", "G", "B", "B", "B"],
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
  createdBy: "Bullet",
  creatorLink: "https://github.com/T-Khanna",
};

export default level;
