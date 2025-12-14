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
  path: "/community-level/388",
  size: 7,
  colorRegions: [
    ["A", "A", "C", "C", "C", "D", "D"],
    ["A", "G", "G", "G", "C", "C", "D"],
    ["G", "G", "G", "B", "B", "C", "C"],
    ["G", "G", "G", "B", "B", "E", "C"],
    ["G", "G", "G", "F", "E", "E", "C"],
    ["G", "G", "G", "F", "F", "E", "C"],
    ["G", "G", "F", "F", "E", "E", "E"],
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
  createdBy: "Heffrey",
  creatorLink: "",
};

export default level;
