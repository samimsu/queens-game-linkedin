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
  path: "/community-level/390",
  size: 9,
  colorRegions: [
    ["F", "F", "F", "F", "G", "F", "F", "E", "E"],
    ["F", "F", "G", "F", "G", "F", "G", "E", "E"],
    ["F", "G", "G", "G", "B", "G", "G", "G", "E"],
    ["F", "G", "I", "G", "G", "G", "I", "G", "E"],
    ["F", "A", "D", "D", "D", "D", "D", "C", "C"],
    ["A", "D", "D", "H", "D", "D", "D", "D", "D"],
    ["A", "D", "D", "H", "D", "H", "D", "D", "C"],
    ["A", "D", "D", "D", "D", "H", "D", "D", "C"],
    ["A", "A", "D", "D", "D", "D", "D", "C", "C"],
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
  createdBy: "Bento",
  creatorLink: "",
};

export default level;
