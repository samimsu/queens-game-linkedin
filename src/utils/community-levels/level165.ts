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
  path: "/community-level/165",
  size: 9,
  colorRegions: [
    ["B", "B", "C", "C", "C", "C", "A", "A", "A"],
    ["B", "B", "C", "I", "C", "C", "A", "A", "A"],
    ["I", "I", "I", "I", "C", "C", "A", "A", "A"],
    ["I", "I", "I", "I", "C", "C", "D", "D", "D"],
    ["I", "I", "I", "C", "I", "I", "I", "I", "I"],
    ["I", "I", "I", "I", "I", "I", "I", "E", "I"],
    ["G", "G", "I", "I", "I", "I", "E", "E", "E"],
    ["G", "G", "H", "F", "E", "E", "F", "E", "E"],
    ["G", "G", "H", "F", "F", "E", "F", "F", "F"],
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
  createdBy: "kaitlyn!",
  creatorLink: "",
};

export default level;
