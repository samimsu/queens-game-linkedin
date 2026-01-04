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
  path: "/community-level/411",
  size: 7,
  colorRegions: [
    ["F", "F", "F", "F", "G", "F", "F"],
    ["F", "F", "F", "F", "E", "F", "F"],
    ["E", "E", "E", "D", "E", "E", "E"],
    ["E", "D", "D", "D", "D", "D", "E"],
    ["A", "B", "D", "D", "D", "C", "E"],
    ["A", "B", "D", "D", "D", "C", "E"],
    ["A", "D", "D", "D", "D", "C", "E"],
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
  createdBy: "Studiemeesters",
  creatorLink: "https://www.studiemeesters.nl",
};

export default level;
