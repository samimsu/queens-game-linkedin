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
  path: "/community-level/82",
  size: 7,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "D"],
    ["C", "A", "A", "B", "B", "B", "D"],
    ["C", "C", "A", "B", "B", "B", "D"],
    ["C", "E", "E", "B", "B", "B", "D"],
    ["E", "E", "E", "F", "B", "G", "D"],
    ["E", "E", "F", "F", "F", "G", "D"],
    ["D", "D", "D", "D", "D", "D", "D"],
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
  createdBy: "ElLol99",
  creatorLink: "",
};

export default level;
