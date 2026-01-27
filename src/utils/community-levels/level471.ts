import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/471",
  size: 6,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B"],
    ["E", "D", "C", "C", "C", "B"],
    ["E", "D", "D", "C", "C", "B"],
    ["E", "E", "F", "C", "C", "F"],
    ["E", "F", "F", "C", "C", "F"],
    ["E", "E", "F", "F", "F", "F"],
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
  createdBy: "Helensz",
  creatorLink: "",
};

export default level;
