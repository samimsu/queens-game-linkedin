import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/463",
  size: 6,
  colorRegions: [
    ["B", "B", "B", "B", "C", "C"],
    ["B", "A", "A", "A", "A", "C"],
    ["B", "E", "E", "A", "C", "C"],
    ["E", "E", "E", "A", "C", "D"],
    ["F", "F", "A", "A", "C", "C"],
    ["F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "J42",
  creatorLink: "",
};

export default level;
