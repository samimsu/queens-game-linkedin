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
  path: "/community-level/357",
  size: 8,
  colorRegions: [
    ["C", "C", "C", "C", "C", "C", "C", "C"],
    ["D", "E", "E", "G", "G", "G", "G", "C"],
    ["D", "E", "E", "G", "F", "F", "F", "C"],
    ["D", "E", "E", "G", "F", "B", "F", "C"],
    ["D", "A", "E", "G", "F", "F", "F", "C"],
    ["D", "E", "E", "H", "H", "H", "F", "C"],
    ["D", "E", "E", "H", "H", "H", "H", "C"],
    ["D", "D", "D", "D", "D", "D", "D", "C"],
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
  createdBy: "Kat",
  creatorLink: "",
};

export default level;
