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
  path: "/community-level/376",
  size: 7,
  colorRegions: [
    ["A", "C", "C", "C", "D", "E", "E"],
    ["A", "A", "A", "A", "D", "D", "E"],
    ["A", "B", "G", "A", "A", "F", "E"],
    ["A", "B", "G", "G", "F", "F", "F"],
    ["A", "B", "G", "F", "A", "F", "F"],
    ["A", "B", "G", "F", "A", "F", "F"],
    ["A", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "Ht the king",
  creatorLink: "",
};

export default level;
