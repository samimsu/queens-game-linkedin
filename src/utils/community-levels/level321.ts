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
  path: "/community-level/321",
  size: 9,
  colorRegions: [
    ["A", "C", "C", "C", "C", "C", "B", "B", "B"],
    ["A", "A", "A", "F", "C", "C", "B", "D", "B"],
    ["A", "A", "F", "F", "C", "C", "C", "D", "B"],
    ["A", "H", "I", "I", "C", "D", "C", "D", "D"],
    ["H", "H", "I", "I", "C", "D", "C", "D", "E"],
    ["H", "G", "G", "G", "G", "D", "C", "D", "E"],
    ["G", "G", "D", "D", "D", "D", "D", "D", "E"],
    ["G", "D", "D", "G", "G", "G", "G", "D", "E"],
    ["G", "G", "G", "G", "E", "E", "E", "E", "E"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
