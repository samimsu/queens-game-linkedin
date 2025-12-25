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
  path: "/community-level/399",
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "C", "B"],
    ["A", "C", "E", "F", "F", "F", "F", "F", "D", "B"],
    ["A", "C", "E", "H", "H", "H", "I", "F", "D", "B"],
    ["A", "C", "E", "H", "G", "I", "I", "F", "D", "B"],
    ["A", "C", "E", "G", "G", "I", "J", "F", "D", "B"],
    ["A", "C", "E", "G", "J", "J", "J", "F", "D", "B"],
    ["A", "C", "E", "E", "E", "E", "E", "E", "D", "B"],
    ["A", "C", "D", "D", "D", "D", "D", "D", "D", "B"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B"],
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
  createdBy: "Ax7_Star",
  creatorLink: "",
};

export default level;
