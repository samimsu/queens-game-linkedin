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
  path: "/community-level/460",
  size: 9,
  colorRegions: [
    ["A", "C", "C", "C", "I", "I", "I", "I", "I"],
    ["A", "C", "C", "C", "C", "H", "H", "I", "I"],
    ["A", "A", "B", "F", "C", "C", "H", "H", "I"],
    ["A", "A", "B", "F", "F", "F", "H", "H", "I"],
    ["A", "B", "B", "F", "H", "H", "H", "I", "I"],
    ["A", "B", "B", "E", "H", "H", "H", "I", "I"],
    ["B", "B", "B", "E", "H", "H", "H", "I", "I"],
    ["D", "B", "D", "D", "G", "G", "I", "I", "I"],
    ["D", "D", "D", "G", "G", "G", "G", "I", "I"],
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
  createdBy: "Lucasem",
  creatorLink: "https://github.com/Krossa300",
};

export default level;
