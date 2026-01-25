import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/432",
  size: 6,
  colorRegions: [
    ["A", "C", "C", "C", "F", "F"],
    ["A", "C", "A", "A", "A", "F"],
    ["A", "A", "A", "F", "F", "F"],
    ["B", "A", "B", "E", "E", "F"],
    ["B", "A", "B", "E", "E", "E"],
    ["B", "B", "B", "E", "D", "D"],
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
  createdBy: "Dumar15",
  creatorLink: "",
};

export default level;
