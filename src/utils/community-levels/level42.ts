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
  path: "/community-level/42",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "C", "C", "E", "E", "A"],
    ["B", "C", "C", "C", "E", "E", "A"],
    ["B", "D", "D", "F", "E", "E", "A"],
    ["B", "D", "D", "D", "G", "G", "A"],
    ["G", "G", "D", "D", "G", "G", "A"],
    ["G", "G", "G", "G", "G", "G", "A"],
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
  createdBy: "Gnr2bernstein",
  creatorLink: "https://www.instagram.com/ms.rrb",
};

export default level;
