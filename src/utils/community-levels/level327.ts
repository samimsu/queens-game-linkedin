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
  path: "/community-level/327",
  size: 7,
  colorRegions: [
    ["G", "G", "G", "E", "E", "E", "E"],
    ["G", "G", "G", "G", "G", "F", "F"],
    ["A", "A", "G", "G", "G", "F", "F"],
    ["B", "A", "C", "G", "G", "F", "F"],
    ["C", "C", "C", "G", "D", "D", "D"],
    ["G", "G", "G", "G", "D", "A", "A"],
    ["E", "E", "E", "E", "E", "A", "A"],
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
  createdBy: "Abdullah",
  creatorLink: "",
};

export default level;
