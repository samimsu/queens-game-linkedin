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
  path: "/community-level/394",
  size: 7,
  colorRegions: [
    ["C", "E", "C", "E", "C", "G", "G"],
    ["C", "C", "E", "C", "E", "G", "G"],
    ["D", "B", "D", "E", "D", "F", "D"],
    ["D", "D", "F", "F", "F", "F", "D"],
    ["A", "D", "A", "F", "D", "F", "B"],
    ["D", "A", "D", "A", "B", "D", "D"],
    ["D", "A", "B", "D", "D", "D", "D"],
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
  createdBy: "Dr_Dirt",
  creatorLink: "https://www.instagram.com/pmodestum/",
};

export default level;
