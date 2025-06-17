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
  path: "/community-level/63",
  size: 7,
  colorRegions: [
    ["C", "C", "A", "B", "B", "B", "B"],
    ["C", "C", "A", "A", "C", "B", "D"],
    ["E", "C", "C", "C", "C", "C", "D"],
    ["E", "E", "D", "D", "D", "D", "D"],
    ["F", "E", "E", "E", "E", "D", "D"],
    ["F", "F", "F", "F", "E", "E", "D"],
    ["G", "G", "G", "F", "F", "E", "D"],
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
  solutionsCount: 15,
  createdBy: "Jez",
  creatorLink: "",
};

export default level;
