import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/171",
  size: 8,
  colorRegions: [
    ["B", "B", "B", "C", "C", "C", "C", "C"],
    ["B", "A", "B", "B", "B", "B", "B", "C"],
    ["B", "B", "B", "B", "B", "B", "B", "B"],
    ["D", "D", "D", "F", "F", "G", "B", "B"],
    ["D", "D", "D", "F", "F", "F", "B", "B"],
    ["D", "D", "D", "F", "F", "F", "B", "B"],
    ["D", "D", "E", "F", "F", "F", "B", "B"],
    ["D", "E", "E", "F", "F", "F", "B", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
  solutionsCount: 1,
  createdBy: "irem",
  creatorLink: "",
};

export default level;
