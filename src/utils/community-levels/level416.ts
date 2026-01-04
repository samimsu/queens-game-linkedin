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
  path: "/community-level/416",
  size: 7,
  colorRegions: [
    ["F", "D", "E", "A", "C", "B", "E"],
    ["A", "C", "F", "B", "G", "D", "A"],
    ["B", "E", "C", "A", "D", "A", "C"],
    ["E", "D", "G", "E", "G", "B", "A"],
    ["G", "F", "D", "B", "F", "E", "F"],
    ["D", "B", "F", "C", "A", "G", "D"],
    ["G", "C", "G", "F", "E", "C", "B"],
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
  createdBy: "Joel",
  creatorLink: "",
};

export default level;
