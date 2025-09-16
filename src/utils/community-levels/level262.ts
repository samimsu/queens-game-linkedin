import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/262",
  size: 6,
  colorRegions: [
    ["A", "B", "D", "D", "E", "F"],
    ["A", "B", "D", "D", "E", "E"],
    ["A", "B", "C", "D", "E", "D"],
    ["A", "B", "C", "D", "D", "D"],
    ["A", "B", "C", "C", "C", "C"],
    ["B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "YohanRdz",
  creatorLink: "https://github.com/YohanRodriguezMDM",
};

export default level;
