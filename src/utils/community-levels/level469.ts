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
  path: "/community-level/469",
  size: 9,
  colorRegions: [
    ["D", "B", "B", "B", "B", "A", "A", "A", "A"],
    ["D", "B", "H", "B", "A", "A", "G", "A", "A"],
    ["D", "B", "B", "B", "A", "G", "G", "A", "A"],
    ["D", "D", "D", "D", "A", "A", "G", "A", "I"],
    ["I", "I", "I", "I", "I", "I", "G", "I", "I"],
    ["I", "I", "C", "I", "E", "I", "I", "I", "I"],
    ["F", "F", "C", "E", "E", "F", "F", "I", "F"],
    ["F", "C", "C", "E", "E", "E", "F", "I", "F"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "F"],
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
  createdBy: "Dimitri Vegas",
  creatorLink: "",
};

export default level;
