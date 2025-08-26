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
  path: "/community-level/222",
  size: 7,
  colorRegions: [
    ["A", "C", "C", "C", "C", "C", "C"],
    ["A", "C", "E", "E", "E", "E", "B"],
    ["A", "C", "F", "F", "G", "E", "B"],
    ["A", "C", "F", "G", "G", "D", "B"],
    ["A", "C", "F", "G", "G", "D", "B"],
    ["A", "C", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "Sarah Leme",
  creatorLink: "https://instagram.com/sarahlleme",
};

export default level;
