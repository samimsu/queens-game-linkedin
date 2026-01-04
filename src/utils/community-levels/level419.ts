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
  path: "/community-level/419",
  size: 7,
  colorRegions: [
    ["C", "C", "C", "C", "C", "C", "C"],
    ["G", "G", "G", "E", "G", "G", "C"],
    ["G", "G", "G", "E", "E", "G", "C"],
    ["D", "D", "D", "G", "E", "G", "C"],
    ["D", "D", "F", "F", "G", "G", "C"],
    ["B", "F", "F", "G", "G", "G", "C"],
    ["B", "B", "A", "A", "A", "A", "C"],
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
  createdBy: "JbKoolN",
  creatorLink: "",
};

export default level;
