import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/337",
  size: 6,
  colorRegions: [
    ["A", "A", "B", "C", "C", "D"],
    ["A", "B", "B", "C", "D", "D"],
    ["A", "E", "F", "C", "C", "D"],
    ["E", "E", "F", "F", "C", "D"],
    ["E", "E", "F", "F", "F", "F"],
    ["E", "E", "E", "E", "E", "F"],
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
  createdBy: "jacksull",
  creatorLink: "",
};

export default level;
