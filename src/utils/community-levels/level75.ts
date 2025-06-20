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
  path: "/community-level/75",
  size: 10,
  colorRegions: [
    ["B", "B", "A", "A", "F", "F", "F", "F", "F", "F"],
    ["A", "A", "A", "A", "A", "F", "F", "F", "F", "F"],
    ["C", "D", "D", "D", "A", "I", "I", "J", "G", "G"],
    ["C", "D", "D", "A", "A", "I", "I", "I", "G", "G"],
    ["C", "D", "D", "D", "A", "I", "E", "I", "G", "G"],
    ["C", "D", "C", "D", "H", "I", "I", "I", "G", "G"],
    ["C", "D", "C", "D", "H", "H", "I", "I", "C", "G"],
    ["C", "D", "C", "C", "C", "I", "I", "C", "C", "G"],
    ["C", "D", "D", "D", "D", "C", "C", "C", "G", "G"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
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
  solutionsCount: 0,
  createdBy: "qwerty",
  creatorLink: "",
};

export default level;
