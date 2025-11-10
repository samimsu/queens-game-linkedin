import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/318",
  size: 9,
  colorRegions: [
    ["C", "C", "C", "C", "C", "C", "C", "D", "D"],
    ["C", "B", "B", "B", "C", "C", "C", "D", "D"],
    ["C", "B", "H", "H", "H", "C", "C", "D", "D"],
    ["C", "B", "B", "H", "C", "C", "C", "C", "C"],
    ["B", "B", "B", "A", "A", "A", "C", "E", "E"],
    ["B", "A", "A", "A", "A", "G", "C", "E", "E"],
    ["B", "A", "A", "A", "A", "G", "E", "E", "F"],
    ["B", "I", "I", "A", "G", "G", "E", "E", "F"],
    ["B", "I", "G", "G", "G", "G", "G", "F", "F"],
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
    I: lightOrchid,
  },
  solutionsCount: 1,
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
