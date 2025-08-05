import { altoMain, anakiwa, celadon, saharaSand } from "../colors";

const level = {
  path: "/community-level/176",
  size: 9,
  colorRegions: [
    ["B", "A", "A", "A", "G", "C", "C", "C", "C"],
    ["A", "A", "A", "G", "G", "G", "A", "A", "C"],
    ["A", "A", "G", "E", "E", "E", "G", "A", "A"],
    ["A", "G", "E", "E", "E", "F", "E", "G", "A"],
    ["G", "G", "I", "I", "I", "I", "I", "H", "H"],
    ["D", "H", "E", "E", "E", "E", "E", "H", "A"],
    ["D", "A", "H", "E", "E", "E", "H", "A", "A"],
    ["D", "A", "A", "H", "H", "H", "A", "A", "A"],
    ["D", "D", "A", "A", "H", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: celadon,
    B: celadon,
    C: celadon,
    D: celadon,
    E: anakiwa,
    F: anakiwa,
    G: saharaSand,
    H: saharaSand,
    I: altoMain,
  },
  solutionsCount: 1,
  createdBy: "Loukis",
  creatorLink: "https://loukis-13.github.io/",
};

export default level;
