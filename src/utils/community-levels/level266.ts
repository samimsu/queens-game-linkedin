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
  path: "/community-level/266",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "E"],
    ["F", "F", "E", "E", "D", "E", "E"],
    ["F", "G", "G", "E", "D", "C", "E"],
    ["G", "G", "E", "E", "D", "C", "C"],
    ["G", "G", "G", "D", "D", "B", "C"],
    ["G", "G", "D", "D", "B", "B", "A"],
    ["G", "G", "G", "G", "B", "A", "A"],
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
  createdBy: "avieira99",
  creatorLink: "https://github.com/avieira99",
};

export default level;
