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
  path: "/community-level/261",
  size: 9,
  colorRegions: [
    ["I", "I", "I", "I", "I", "I", "I", "I", "I"],
    ["I", "F", "F", "F", "F", "F", "F", "F", "H"],
    ["I", "G", "E", "D", "D", "I", "D", "F", "H"],
    ["I", "G", "E", "B", "B", "B", "D", "F", "H"],
    ["I", "G", "E", "C", "A", "I", "D", "F", "H"],
    ["I", "G", "E", "C", "A", "A", "D", "F", "H"],
    ["I", "G", "E", "C", "C", "C", "D", "F", "H"],
    ["I", "G", "E", "E", "E", "E", "E", "F", "H"],
    ["I", "G", "G", "G", "G", "G", "H", "H", "H"],
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
  createdBy: "Alexallos",
  creatorLink: "https://github.com/Alexallos",
};

export default level;
