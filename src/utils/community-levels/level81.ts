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
  path: "/community-level/81",
  size: 11,
  colorRegions: [
    ["B", "B", "B", "B", "A", "A", "A", "C", "D", "C", "C"],
    ["B", "B", "B", "B", "B", "B", "A", "C", "C", "C", "C"],
    ["F", "G", "B", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["F", "B", "B", "A", "E", "E", "E", "E", "E", "J", "A"],
    ["F", "B", "B", "A", "A", "A", "A", "E", "E", "J", "A"],
    ["F", "F", "B", "F", "E", "E", "E", "E", "E", "J", "A"],
    ["H", "F", "F", "F", "F", "E", "E", "E", "E", "J", "A"],
    ["H", "H", "F", "F", "F", "E", "E", "E", "E", "J", "A"],
    ["H", "H", "H", "I", "I", "I", "E", "E", "E", "J", "A"],
    ["H", "H", "H", "I", "I", "I", "K", "E", "E", "J", "A"],
    ["H", "H", "H", "I", "I", "I", "I", "E", "E", "J", "J"],
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
  solutionsCount: 12,
  createdBy: "weijen",
  creatorLink: "",
};

export default level;
