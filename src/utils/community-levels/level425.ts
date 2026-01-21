import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/425",
  size: 6,
  colorRegions: [
    ["A", "F", "F", "F", "F", "F"],
    ["B", "B", "B", "F", "F", "F"],
    ["C", "C", "C", "C", "C", "F"],
    ["D", "D", "F", "F", "F", "F"],
    ["E", "E", "E", "E", "F", "F"],
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
  createdBy: "FNN",
  creatorLink: "",
};

export default level;
