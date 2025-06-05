import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/15",
  size: 6,
  colorRegions: [
    ["C", "C", "F", "F", "F", "E"],
    ["C", "F", "F", "F", "A", "E"],
    ["C", "D", "D", "A", "A", "E"],
    ["C", "C", "D", "B", "A", "E"],
    ["D", "D", "D", "D", "D", "E"],
    ["E", "E", "E", "E", "E", "E"],
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
  createdBy: "the_trademark",
};

export default level;
