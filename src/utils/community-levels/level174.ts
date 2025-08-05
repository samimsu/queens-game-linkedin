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
  path: "/community-level/174",
  size: 9,
  colorRegions: [
    ["C", "I", "I", "I", "B", "E", "E", "E", "C"],
    ["I", "I", "H", "H", "B", "H", "H", "H", "D"],
    ["I", "E", "G", "H", "B", "H", "H", "H", "D"],
    ["I", "G", "G", "H", "B", "I", "H", "H", "D"],
    ["D", "D", "D", "D", "B", "H", "H", "H", "D"],
    ["I", "F", "F", "H", "B", "H", "H", "H", "D"],
    ["I", "H", "F", "H", "B", "H", "H", "H", "D"],
    ["I", "F", "F", "H", "B", "H", "H", "H", "C"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "A"],
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
  createdBy: "GB",
  creatorLink: "",
};

export default level;
