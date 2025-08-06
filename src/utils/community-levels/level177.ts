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
  path: "/community-level/177",
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "F", "F", "G"],
    ["A", "A", "A", "B", "F", "F", "E"],
    ["C", "B", "B", "B", "F", "E", "E"],
    ["C", "C", "C", "C", "F", "E", "D"],
    ["C", "D", "D", "C", "F", "E", "D"],
    ["C", "D", "D", "C", "F", "E", "D"],
    ["D", "D", "D", "D", "D", "D", "D"],
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
  solutionsCount: 1,
  createdBy: "AbWaughMination",
  creatorLink: "",
};

export default level;
