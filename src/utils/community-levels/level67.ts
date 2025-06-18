import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/67",
  size: 6,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B"],
    ["B", "E", "E", "A", "A", "F"],
    ["B", "E", "E", "A", "A", "F"],
    ["B", "C", "D", "D", "A", "F"],
    ["B", "C", "D", "D", "A", "F"],
    ["B", "F", "F", "F", "F", "F"],
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
  createdBy: "Alex",
  creatorLink: "",
};

export default level;
