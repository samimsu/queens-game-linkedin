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
  path: "/community-level/85",
  size: 7,
  colorRegions: [
    ["F", "F", "F", "F", "F", "F", "F"],
    ["F", "F", "B", "B", "D", "D", "F"],
    ["F", "B", "E", "B", "B", "B", "F"],
    ["G", "B", "B", "B", "B", "B", "C"],
    ["G", "B", "B", "B", "B", "B", "C"],
    ["G", "G", "B", "B", "B", "A", "C"],
    ["A", "A", "A", "A", "A", "A", "C"],
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
  solutionsCount: 18,
  createdBy: "lastCoyotes",
  creatorLink: "https://coyotes.dev/",
};

export default level;
