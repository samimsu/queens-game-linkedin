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
  path: "/community-level/340",
  size: 7,
  colorRegions: [
    ["C", "C", "C", "D", "D", "D", "D"],
    ["C", "A", "C", "D", "E", "D", "D"],
    ["C", "A", "C", "D", "D", "D", "D"],
    ["C", "C", "C", "D", "D", "D", "D"],
    ["F", "F", "D", "D", "D", "B", "D"],
    ["G", "F", "D", "D", "D", "B", "D"],
    ["G", "G", "G", "G", "D", "D", "D"],
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
  createdBy: "kitty",
  creatorLink: "",
};

export default level;
