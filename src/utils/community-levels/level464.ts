import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/464",
  size: 6,
  colorRegions: [
    ["A", "A", "D", "D", "B", "B"],
    ["A", "D", "D", "D", "F", "B"],
    ["D", "D", "D", "F", "F", "F"],
    ["D", "D", "F", "F", "F", "E"],
    ["C", "D", "F", "F", "E", "E"],
    ["C", "C", "F", "F", "F", "F"],
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
  createdBy: "gabrieltrifoni",
  creatorLink: "",
};

export default level;
