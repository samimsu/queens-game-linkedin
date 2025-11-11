import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  halfBaked,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/339",
  size: 7,
  colorRegions: [
    ["B", "E", "E", "E", "E", "D", "D"],
    ["A", "E", "E", "F", "G", "D", "D"],
    ["A", "E", "E", "F", "G", "G", "D"],
    ["A", "F", "F", "F", "G", "G", "D"],
    ["A", "F", "F", "F", "G", "G", "C"],
    ["A", "F", "F", "F", "G", "G", "C"],
    ["A", "A", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: halfBaked,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "AltoHyperXYZ",
  creatorLink: "",
};

export default level;
