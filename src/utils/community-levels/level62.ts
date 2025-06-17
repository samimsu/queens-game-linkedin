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
  path: "/community-level/62",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "E", "E", "E", "F"],
    ["B", "A", "A", "E", "E", "E", "E"],
    ["B", "B", "A", "E", "E", "E", "E"],
    ["C", "C", "C", "C", "C", "E", "E"],
    ["D", "D", "D", "D", "D", "E", "E"],
    ["D", "D", "D", "E", "E", "E", "E"],
    ["D", "D", "D", "D", "E", "G", "E"],
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
  solutionsCount: 2,
  createdBy: "Ev1lKn1gh7",
  creatorLink: "https://github.com/Ev1lKn1gh7",
};

export default level;
