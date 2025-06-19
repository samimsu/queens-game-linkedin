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
  path: "/community-level/73",
  size: 7,
  colorRegions: [
    ["A", "B", "B", "B", "D", "D", "C"],
    ["A", "B", "B", "B", "D", "D", "C"],
    ["A", "E", "B", "C", "C", "C", "C"],
    ["G", "E", "B", "F", "F", "C", "C"],
    ["G", "E", "B", "F", "F", "C", "C"],
    ["G", "G", "E", "E", "F", "C", "C"],
    ["G", "G", "E", "E", "C", "C", "C"],
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
  solutionsCount: 13,
  createdBy: "Kristina",
  creatorLink: "",
};

export default level;
