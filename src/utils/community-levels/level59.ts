import {
  altoMain,
  anakiwa,
  bittersweet,
  canCan,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/59",
  size: 9,
  colorRegions: [
    ["C", "A", "A", "A", "A", "F", "F", "F", "F"],
    ["C", "A", "A", "A", "A", "A", "B", "F", "F"],
    ["C", "C", "H", "H", "B", "A", "B", "F", "F"],
    ["C", "G", "H", "H", "B", "B", "B", "B", "F"],
    ["G", "G", "E", "E", "I", "I", "I", "I", "F"],
    ["G", "G", "E", "E", "E", "F", "I", "F", "F"],
    ["D", "E", "E", "E", "F", "F", "I", "I", "I"],
    ["D", "D", "E", "E", "F", "F", "I", "F", "F"],
    ["D", "D", "D", "E", "F", "F", "F", "F", "F"],
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
    I: canCan,
  },
  solutionsCount: 1,
  createdBy: "dd.mm",
  creatorLink: "https://github.com/dd-mm17",
};

export default level;
