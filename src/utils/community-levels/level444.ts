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
  path: "/community-level/444",
  size: 7,
  colorRegions: [
    ["C", "C", "F", "F", "B", "C", "G"],
    ["C", "F", "C", "C", "B", "C", "C"],
    ["D", "D", "F", "C", "A", "B", "B"],
    ["D", "A", "F", "C", "E", "E", "B"],
    ["D", "A", "B", "B", "C", "C", "B"],
    ["A", "A", "A", "B", "C", "C", "C"],
    ["A", "B", "B", "B", "B", "C", "C"],
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
  createdBy: "GardienVolcan",
  creatorLink: "",
};

export default level;
