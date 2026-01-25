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
  path: "/community-level/454",
  size: 9,
  colorRegions: [
    ["C", "C", "C", "B", "C", "B", "C", "C", "C"],
    ["B", "A", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "I", "B", "F", "F", "B", "F", "F"],
    ["B", "B", "I", "B", "F", "B", "G", "B", "F"],
    ["B", "B", "I", "B", "F", "F", "B", "F", "F"],
    ["D", "B", "I", "B", "H", "B", "B", "H", "H"],
    ["B", "B", "I", "B", "H", "H", "B", "B", "H"],
    ["B", "B", "I", "B", "E", "E", "B", "E", "E"],
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
  createdBy: "Pier",
  creatorLink: "",
};

export default level;
