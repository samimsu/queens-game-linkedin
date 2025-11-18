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
  path: "/community-level/345",
  size: 7,
  colorRegions: [
    ["B", "B", "G", "B", "B", "B", "B"],
    ["B", "A", "A", "F", "A", "C", "B"],
    ["B", "A", "A", "A", "A", "A", "C"],
    ["B", "G", "A", "E", "A", "A", "B"],
    ["F", "A", "A", "A", "A", "D", "B"],
    ["B", "A", "A", "A", "A", "A", "B"],
    ["B", "B", "E", "B", "D", "B", "B"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
