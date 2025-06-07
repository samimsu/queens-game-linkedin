import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/36",
  size: 7,
  colorRegions: [
    ["A", "D", "A", "A", "A", "F", "G"],
    ["A", "D", "E", "E", "A", "F", "G"],
    ["A", "D", "E", "E", "A", "F", "F"],
    ["A", "C", "C", "C", "C", "F", "F"],
    ["B", "B", "B", "B", "C", "F", "F"],
    ["C", "C", "C", "C", "C", "F", "F"],
    ["D", "D", "D", "D", "D", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 27,
  createdBy: "notaquestionmark",
};

export default level;
