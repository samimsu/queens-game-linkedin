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
  path: "/community-level/101",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "F"],
    ["D", "D", "D", "D", "D", "E", "F"],
    ["D", "D", "D", "D", "D", "E", "F"],
    ["E", "E", "E", "E", "G", "G", "F"],
    ["C", "C", "C", "C", "G", "G", "F"],
    ["A", "B", "B", "C", "G", "G", "F"],
    ["A", "A", "B", "C", "G", "G", "F"],
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
  createdBy: "JonaJona",
  creatorLink: "",
};

export default level;
