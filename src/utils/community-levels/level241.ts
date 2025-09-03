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
  path: "/community-level/241",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "E", "E", "B", "B"],
    ["E", "E", "E", "E", "B", "B", "B"],
    ["D", "D", "B", "B", "B", "B", "F"],
    ["D", "D", "B", "B", "B", "B", "B"],
    ["D", "D", "A", "A", "A", "A", "A"],
    ["D", "G", "A", "A", "A", "A", "A"],
    ["D", "D", "A", "A", "A", "C", "A"],
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
  createdBy: "nuriasegado",
  creatorLink: "",
};

export default level;
