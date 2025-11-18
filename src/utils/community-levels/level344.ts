import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  lightOrchid,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/344",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "E", "E", "E", "E", "F", "C"],
    ["A", "E", "E", "G", "G", "F", "C"],
    ["A", "E", "E", "E", "F", "F", "C"],
    ["A", "B", "B", "B", "B", "B", "C"],
    ["A", "B", "D", "D", "B", "B", "C"],
    ["A", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "Ultratronix",
  creatorLink: "https://www.linkedin.com/in/rosariorusso",
};

export default level;
