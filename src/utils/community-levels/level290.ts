import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/290",
  size: 10,
  colorRegions: [
    ["C", "C", "A", "A", "G", "G", "E", "H", "H", "H"],
    ["C", "C", "A", "A", "G", "G", "E", "H", "H", "H"],
    ["C", "C", "A", "A", "G", "E", "E", "H", "H", "H"],
    ["C", "D", "D", "B", "E", "E", "J", "H", "H", "H"],
    ["C", "D", "B", "B", "E", "J", "J", "J", "J", "H"],
    ["C", "D", "D", "B", "E", "F", "J", "I", "I", "I"],
    ["C", "D", "F", "F", "F", "F", "J", "I", "I", "I"],
    ["C", "D", "F", "I", "F", "I", "I", "I", "I", "I"],
    ["C", "I", "I", "I", "I", "I", "I", "I", "I", "I"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "I", "I"],
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
    J: halfBaked,
  },
  solutionsCount: 1,
  createdBy: "Fayssalmekk",
  creatorLink: "https://github.com/Fayssalmekk",
};

export default level;
