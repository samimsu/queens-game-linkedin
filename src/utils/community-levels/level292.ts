import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/292",
  size: 6,
  colorRegions: [
    ["A", "A", "A", "B", "D", "D"],
    ["C", "B", "A", "B", "D", "E"],
    ["C", "B", "B", "B", "D", "E"],
    ["C", "C", "D", "D", "D", "E"],
    ["F", "F", "F", "F", "F", "E"],
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
  createdBy: "Sweetokami",
  creatorLink: "",
};

export default level;
