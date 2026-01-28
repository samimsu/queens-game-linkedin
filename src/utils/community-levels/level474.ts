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
  path: "/community-level/474",
  size: 7,
  colorRegions: [
    ["D", "D", "D", "D", "D", "D", "D"],
    ["D", "A", "A", "A", "G", "G", "D"],
    ["D", "A", "E", "F", "F", "G", "G"],
    ["D", "A", "E", "F", "F", "G", "G"],
    ["D", "E", "E", "E", "E", "E", "G"],
    ["D", "E", "B", "B", "B", "B", "B"],
    ["D", "D", "D", "D", "C", "D", "D"],
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
  createdBy: "Meyina",
  creatorLink: "https://www.instagram.com/meyina009/",
};

export default level;
