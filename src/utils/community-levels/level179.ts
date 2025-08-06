import {
  altoMain,
  bittersweet,
  lightOrchid,
  lightWisteria,
  saharaSand,
  tallow,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/179",
  size: 7,
  colorRegions: [
    ["A", "C", "C", "F", "D", "D", "A"],
    ["B", "B", "C", "F", "D", "B", "B"],
    ["B", "B", "F", "F", "F", "B", "B"],
    ["F", "F", "F", "A", "F", "F", "F"],
    ["E", "E", "F", "F", "F", "G", "G"],
    ["E", "E", "E", "G", "G", "G", "G"],
    ["A", "E", "E", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: turquoiseBlue,
    C: lightOrchid,
    D: tallow,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "Remu",
  creatorLink: "https://github.com/Remu716",
};

export default level;
