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
  path: "/community-level/110",
  size: 10,
  colorRegions: [
    ["G", "E", "A", "A", "A", "A", "F", "I", "I", "I"],
    ["G", "E", "E", "F", "F", "F", "F", "I", "G", "I"],
    ["G", "E", "E", "B", "B", "D", "F", "I", "G", "I"],
    ["G", "E", "C", "B", "B", "D", "F", "I", "G", "I"],
    ["G", "E", "C", "C", "D", "D", "F", "I", "G", "I"],
    ["G", "E", "E", "E", "E", "E", "E", "G", "G", "I"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "I"],
    ["H", "H", "H", "H", "H", "H", "H", "H", "G", "I"],
    ["H", "J", "J", "J", "J", "J", "J", "H", "H", "I"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "H", "H"],
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
  createdBy: "Xose",
  creatorLink: "http://www.josefernandez.xyz",
};

export default level;
