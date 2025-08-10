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
  path: "/community-level/186",
  size: 7,
  colorRegions: [
    ["F", "F", "F", "F", "F", "F", "F"],
    ["G", "G", "G", "G", "G", "G", "F"],
    ["G", "G", "G", "G", "C", "G", "F"],
    ["A", "A", "A", "A", "C", "G", "F"],
    ["B", "B", "B", "A", "C", "D", "D"],
    ["B", "C", "C", "C", "C", "D", "E"],
    ["B", "B", "B", "B", "C", "D", "E"],
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
  createdBy: "PerryPerryson",
  creatorLink: "",
};

export default level;
