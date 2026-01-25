import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/439",
  size: 9,
  colorRegions: [
    ["E", "E", "E", "E", "E", "F", "F", "I", "H"],
    ["E", "E", "E", "E", "E", "F", "G", "I", "H"],
    ["E", "E", "E", "E", "E", "F", "G", "I", "H"],
    ["E", "E", "E", "E", "E", "G", "G", "H", "H"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["C", "C", "C", "C", "E", "E", "E", "E", "E"],
    ["A", "B", "B", "C", "E", "E", "E", "E", "E"],
    ["A", "A", "B", "D", "E", "E", "E", "E", "E"],
    ["A", "B", "B", "D", "E", "E", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: turquoiseBlue,
    I: lightOrchid,
  },
  solutionsCount: 1,
  createdBy: "Davey",
  creatorLink: "",
};

export default level;
