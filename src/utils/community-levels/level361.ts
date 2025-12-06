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
  path: "/community-level/361",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["B", "C", "C", "C", "C", "C", "A"],
    ["B", "F", "E", "E", "E", "E", "A"],
    ["B", "F", "E", "G", "E", "E", "A"],
    ["B", "F", "F", "F", "F", "F", "A"],
    ["B", "D", "D", "D", "D", "D", "A"],
    ["B", "B", "B", "B", "B", "B", "A"],
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
  createdBy: "Hazey",
  creatorLink: "",
};

export default level;
