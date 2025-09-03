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
  path: "/community-level/240",
  size: 7,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B", "C", "B"],
    ["B", "B", "D", "B", "B", "B", "B"],
    ["E", "E", "E", "E", "E", "E", "E"],
    ["F", "F", "F", "F", "F", "F", "F"],
    ["F", "G", "G", "F", "F", "F", "F"],
    ["F", "F", "F", "F", "F", "F", "A"],
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
  createdBy: "Futrion",
  creatorLink: "https://github.com/Futrion",
};

export default level;
