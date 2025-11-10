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
  path: "/community-level/320",
  size: 7,
  colorRegions: [
    ["D", "D", "B", "B", "B", "B", "A"],
    ["D", "E", "B", "B", "B", "B", "A"],
    ["E", "E", "B", "B", "C", "B", "A"],
    ["E", "E", "B", "B", "C", "B", "B"],
    ["E", "F", "F", "B", "C", "B", "C"],
    ["F", "F", "G", "C", "C", "C", "C"],
    ["G", "G", "G", "G", "C", "C", "C"],
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
  createdBy: "Óscar",
  creatorLink: "https://github.com/OscarNoguero",
};

export default level;
