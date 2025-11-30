import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/355",
  size: 6,
  colorRegions: [
    ["E", "E", "E", "E", "E", "D"],
    ["B", "E", "E", "D", "D", "D"],
    ["B", "E", "E", "E", "E", "E"],
    ["B", "A", "E", "E", "E", "C"],
    ["B", "A", "E", "E", "C", "C"],
    ["B", "B", "E", "F", "F", "F"],
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
  createdBy: "AMR",
  creatorLink: "",
};

export default level;
