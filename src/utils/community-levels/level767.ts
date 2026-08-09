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
  path: "/community-level/767",
  size: 7,
  colorRegions: [
    ["D", "D", "F", "F", "F", "F", "F"],
    ["C", "D", "D", "G", "F", "G", "F"],
    ["C", "A", "A", "G", "F", "G", "F"],
    ["C", "C", "B", "G", "G", "G", "E"],
    ["C", "C", "B", "G", "G", "E", "E"],
    ["C", "C", "C", "C", "C", "C", "E"],
    ["C", "E", "E", "E", "E", "E", "E"],
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
  createdBy: "ImRun",
  creatorLink: "https://github.com/ImRunM",
};

export default level;
