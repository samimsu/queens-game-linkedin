import {
  altoMain,
  anakiwa,
  bittersweet,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/423",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "F", "G", "G"],
    ["A", "B", "D", "D", "E", "F", "F", "G", "I"],
    ["A", "B", "C", "D", "E", "F", "G", "G", "I"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    ["A", "B", "C", "D", "E", "H", "H", "H", "H"],
    ["A", "B", "C", "D", "E", "E", "E", "E", "H"],
    ["A", "B", "C", "D", "D", "D", "D", "E", "H"],
    ["A", "B", "C", "C", "C", "C", "C", "E", "H"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: saharaSand,
    D: nomad,
    E: altoMain,
    F: halfBaked,
    G: anakiwa,
    H: lightWisteria,
    I: lightOrchid,
  },
  solutionsCount: 1,
  createdBy: "Mia",
  creatorLink: "",
};

export default level;
