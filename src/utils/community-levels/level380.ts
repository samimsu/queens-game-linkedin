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
  path: "/community-level/380",
  size: 7,
  colorRegions: [
    ["D", "E", "E", "E", "E", "E", "G"],
    ["D", "F", "F", "F", "E", "E", "G"],
    ["E", "E", "E", "E", "E", "E", "G"],
    ["C", "C", "E", "E", "E", "E", "E"],
    ["C", "C", "B", "B", "E", "E", "E"],
    ["E", "E", "E", "B", "E", "A", "E"],
    ["E", "A", "A", "A", "A", "A", "E"],
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
  createdBy: "JoJo",
  creatorLink: "",
};

export default level;
