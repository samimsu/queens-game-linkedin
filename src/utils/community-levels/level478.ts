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
  path: "/community-level/478",
  size: 9,
  colorRegions: [
    ["G", "G", "G", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "I", "G", "I", "H", "G", "G", "G"],
    ["G", "G", "I", "I", "I", "H", "G", "G", "G"],
    ["G", "G", "A", "H", "H", "H", "A", "G", "E"],
    ["G", "A", "A", "A", "D", "A", "A", "A", "E"],
    ["G", "A", "A", "A", "A", "A", "A", "A", "E"],
    ["G", "G", "A", "A", "A", "A", "A", "B", "B"],
    ["G", "G", "F", "A", "A", "A", "C", "C", "B"],
    ["G", "F", "F", "F", "A", "C", "C", "C", "B"],
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
  createdBy: "Meyina",
  creatorLink: "https://www.instagram.com/meyina009/",
};

export default level;
