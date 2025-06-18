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
  path: "/community-level/68",
  size: 7,
  colorRegions: [
    ["G", "D", "D", "D", "D", "D", "C"],
    ["G", "A", "A", "D", "F", "E", "F"],
    ["G", "A", "A", "D", "F", "E", "F"],
    ["G", "A", "B", "D", "F", "E", "F"],
    ["G", "B", "B", "D", "F", "E", "F"],
    ["G", "B", "B", "D", "F", "E", "F"],
    ["G", "G", "G", "D", "F", "F", "F"],
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
  solutionsCount: 29,
  createdBy: "TaMo",
  creatorLink: "",
};

export default level;
