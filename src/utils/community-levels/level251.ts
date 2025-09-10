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
  path: "/community-level/251",
  size: 8,
  colorRegions: [
    ["H", "H", "H", "D", "D", "B", "B", "A"],
    ["H", "D", "D", "D", "D", "B", "A", "A"],
    ["H", "D", "D", "D", "D", "B", "A", "A"],
    ["D", "D", "D", "D", "B", "B", "A", "A"],
    ["F", "F", "D", "D", "D", "B", "A", "A"],
    ["G", "F", "E", "E", "D", "C", "A", "A"],
    ["G", "F", "E", "E", "D", "C", "C", "C"],
    ["G", "F", "F", "E", "D", "D", "D", "C"],
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
  solutionsCount: 1,
  createdBy: "Jorgeodeh",
  creatorLink: "",
};

export default level;
