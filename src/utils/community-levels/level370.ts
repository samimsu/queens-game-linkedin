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
  path: "/community-level/370",
  size: 7,
  colorRegions: [
    ["G", "G", "G", "G", "G", "G", "D"],
    ["G", "E", "E", "E", "E", "E", "D"],
    ["G", "F", "A", "A", "B", "C", "D"],
    ["G", "F", "A", "B", "B", "C", "D"],
    ["G", "F", "B", "B", "C", "C", "D"],
    ["G", "C", "C", "C", "C", "D", "D"],
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
  createdBy: "Scubadooper",
  creatorLink: "",
};

export default level;
