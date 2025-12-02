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
  path: "/community-level/359",
  size: 7,
  colorRegions: [
    ["A", "E", "E", "E", "E", "E", "D"],
    ["A", "G", "G", "C", "C", "C", "D"],
    ["A", "G", "G", "C", "C", "F", "E"],
    ["E", "G", "G", "B", "C", "F", "E"],
    ["E", "G", "G", "F", "F", "F", "E"],
    ["E", "G", "G", "F", "F", "F", "E"],
    ["E", "E", "E", "E", "E", "E", "E"],
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
  createdBy: "Jessica Moreno",
  creatorLink: "",
};

export default level;
