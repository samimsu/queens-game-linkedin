import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/343",
  size: 6,
  colorRegions: [
    ["A", "A", "A", "A", "F", "F"],
    ["C", "B", "D", "A", "A", "F"],
    ["B", "B", "D", "E", "A", "F"],
    ["B", "B", "D", "E", "A", "F"],
    ["B", "B", "D", "A", "A", "F"],
    ["B", "B", "D", "A", "F", "F"],
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
  createdBy: "The Queen King",
  creatorLink: "",
};

export default level;
