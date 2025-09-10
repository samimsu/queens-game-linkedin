import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/255",
  size: 8,
  colorRegions: [
    ["D", "D", "D", "D", "D", "D", "A", "A"],
    ["D", "D", "B", "C", "A", "A", "A", "A"],
    ["D", "B", "B", "B", "A", "A", "A", "A"],
    ["D", "B", "B", "B", "A", "A", "A", "E"],
    ["D", "B", "G", "F", "F", "F", "F", "E"],
    ["B", "B", "F", "F", "F", "H", "H", "E"],
    ["B", "H", "F", "H", "H", "H", "E", "E"],
    ["B", "H", "H", "H", "H", "H", "E", "E"],
  ],
  regionColors: {
    A: lightOrchid,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
  },
  solutionsCount: 1,
  createdBy: "Petrus Maximus",
  creatorLink: "",
};

export default level;
