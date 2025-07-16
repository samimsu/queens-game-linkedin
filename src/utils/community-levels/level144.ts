import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/144",
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "B", "C"],
    ["D", "A", "A", "A", "B", "C", "B", "C"],
    ["D", "A", "D", "A", "C", "C", "C", "C"],
    ["D", "D", "D", "A", "A", "A", "A", "C"],
    ["E", "E", "D", "D", "F", "F", "F", "C"],
    ["E", "G", "F", "F", "F", "H", "C", "C"],
    ["E", "G", "G", "G", "G", "H", "H", "H"],
    ["E", "E", "E", "E", "G", "G", "G", "G"],
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
  },
  solutionsCount: 87,
  createdBy: "kunalkunalkunal",
  creatorLink: "https://github.com/jadhav-kunal",
};

export default level;
