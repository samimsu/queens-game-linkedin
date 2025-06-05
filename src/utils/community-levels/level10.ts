import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/10",
  size: 6,
  colorRegions: [
    ["B", "B", "B", "A", "A", "E"],
    ["B", "B", "B", "A", "A", "E"],
    ["C", "B", "A", "A", "E", "E"],
    ["C", "F", "D", "D", "E", "C"],
    ["C", "F", "F", "D", "C", "C"],
    ["C", "C", "C", "C", "C", "C"],
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
  createdBy: "dinobob4",
  creatorLink: "https://github.com/connorrclarke",
};

export default level;
