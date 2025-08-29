import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/233",
  size: 9,
  colorRegions: [
    ["A", "F", "F", "F", "F", "F", "F", "F", "F"],
    ["A", "A", "A", "A", "G", "G", "E", "E", "F"],
    ["I", "A", "A", "A", "G", "G", "E", "E", "F"],
    ["I", "I", "C", "C", "G", "C", "C", "E", "F"],
    ["H", "H", "C", "C", "C", "C", "C", "E", "F"],
    ["C", "C", "C", "C", "C", "C", "C", "E", "F"],
    ["B", "B", "C", "D", "D", "C", "C", "D", "F"],
    ["B", "B", "B", "D", "D", "C", "D", "D", "F"],
    ["B", "B", "B", "D", "D", "D", "D", "D", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
  solutionsCount: 1,
  createdBy: "Michelle W",
  creatorLink: "https://www.instagram.com/witheeee",
};

export default level;
