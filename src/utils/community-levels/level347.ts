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
  path: "/community-level/347",
  size: 8,
  colorRegions: [
    ["B", "D", "B", "B", "B", "G", "B", "B"],
    ["B", "A", "C", "A", "A", "A", "A", "B"],
    ["C", "A", "A", "A", "A", "H", "A", "B"],
    ["B", "A", "A", "A", "A", "A", "A", "E"],
    ["B", "D", "A", "A", "E", "A", "A", "B"],
    ["B", "A", "A", "F", "G", "A", "A", "B"],
    ["B", "A", "A", "A", "A", "A", "A", "F"],
    ["B", "B", "B", "B", "B", "B", "H", "B"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
