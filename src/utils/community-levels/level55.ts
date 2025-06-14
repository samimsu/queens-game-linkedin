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
  path: "/community-level/55",
  size: 9,
  colorRegions: [
    ["I", "I", "I", "I", "I", "I", "I", "I", "I"],
    ["A", "B", "C", "C", "H", "H", "H", "H", "I"],
    ["A", "B", "C", "C", "H", "H", "H", "H", "I"],
    ["A", "B", "C", "C", "E", "E", "F", "F", "I"],
    ["A", "B", "C", "C", "C", "E", "F", "G", "I"],
    ["A", "B", "C", "C", "C", "E", "F", "G", "I"],
    ["A", "B", "C", "E", "E", "E", "F", "F", "I"],
    ["A", "B", "C", "C", "E", "E", "F", "F", "I"],
    ["A", "B", "C", "C", "E", "D", "F", "F", "I"],
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
  solutionsCount: 8,
  createdBy: "Mel.ch11",
  creatorLink: "",
};

export default level;
