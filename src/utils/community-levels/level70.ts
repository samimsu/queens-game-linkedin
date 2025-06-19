import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/70",
  size: 6,
  colorRegions: [
    ["A", "A", "E", "E", "A", "B"],
    ["A", "F", "E", "C", "D", "B"],
    ["A", "F", "E", "C", "D", "B"],
    ["A", "F", "E", "C", "D", "B"],
    ["A", "F", "E", "E", "D", "C"],
    ["A", "A", "A", "C", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 19,
  createdBy: "ClaudeB",
  creatorLink: "",
};

export default level;
