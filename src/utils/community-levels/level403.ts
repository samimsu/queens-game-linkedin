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
  path: "/community-level/403",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B", "B", "A"],
    ["B", "B", "B", "C", "C", "B", "C"],
    ["F", "F", "E", "C", "C", "B", "C"],
    ["F", "F", "E", "E", "C", "B", "C"],
    ["F", "F", "E", "E", "C", "C", "D"],
    ["G", "E", "E", "D", "D", "D", "D"],
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
  createdBy: "Boom",
  creatorLink: "",
};

export default level;
