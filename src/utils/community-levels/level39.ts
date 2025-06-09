import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/39",
  size: 7,
  colorRegions: [
    ["F", "F", "F", "F", "F", "C", "A"],
    ["F", "B", "B", "C", "C", "C", "E"],
    ["F", "C", "C", "C", "E", "E", "E"],
    ["F", "G", "G", "E", "E", "E", "E"],
    ["F", "G", "G", "E", "D", "D", "D"],
    ["G", "G", "G", "E", "D", "D", "D"],
    ["E", "E", "E", "E", "D", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "ClaireF",
};

export default level;
