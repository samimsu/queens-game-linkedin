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
  path: "/community-level/79",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["G", "G", "G", "E", "C", "D", "A"],
    ["G", "G", "G", "E", "C", "D", "A"],
    ["F", "F", "E", "E", "C", "D", "A"],
    ["F", "F", "E", "C", "C", "B", "A"],
    ["F", "E", "E", "C", "B", "B", "A"],
    ["F", "F", "F", "C", "B", "B", "A"],
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
  createdBy: "Dani",
  creatorLink: "",
};

export default level;
