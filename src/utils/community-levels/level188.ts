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
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/",
  size: 11,
  colorRegions: [
    ["F", "F", "F", "F", "F", "F", "F", "F", "F", "C", "C"],
    ["F", "F", "F", "F", "F", "F", "F", "C", "C", "C", "B"],
    ["F", "F", "F", "F", "F", "F", "E", "E", "E", "B", "B"],
    ["F", "F", "F", "F", "F", "G", "G", "E", "A", "A", "A"],
    ["F", "F", "F", "G", "G", "G", "E", "E", "A", "D", "A"],
    ["F", "F", "F", "F", "G", "G", "E", "E", "D", "D", "A"],
    ["F", "F", "F", "F", "G", "G", "D", "E", "D", "A", "A"],
    ["J", "G", "G", "G", "G", "G", "D", "D", "D", "A", "A"],
    ["J", "J", "J", "I", "G", "G", "D", "D", "A", "A", "A"],
    ["J", "J", "H", "I", "I", "K", "K", "D", "D", "D", "A"],
    ["J", "J", "H", "H", "I", "K", "K", "K", "K", "D", "A"],
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
    K: turquoiseBlue,
  },
  solutionsCount: -1,
  createdBy: "Lime&LimpidGreen",
  creatorLink: "https://github.com/LimeAndLimpidGreen",
};

export default level;
