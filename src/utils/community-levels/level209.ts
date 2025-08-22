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
  path: "/community-level/209",
  size: 9,
  colorRegions: [
    ["G", "G", "H", "I", "I", "I", "I", "I", "I"],
    ["H", "H", "H", "I", "I", "I", "I", "I", "I"],
    ["H", "H", "I", "I", "I", "I", "I", "I", "I"],
    ["H", "H", "I", "I", "F", "I", "I", "I", "F"],
    ["H", "E", "F", "F", "F", "F", "F", "F", "F"],
    ["D", "E", "E", "E", "E", "F", "F", "F", "B"],
    ["D", "E", "E", "E", "E", "A", "A", "B", "B"],
    ["D", "E", "E", "E", "E", "A", "A", "C", "C"],
    ["D", "D", "D", "D", "C", "C", "C", "C", "C"],
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
  createdBy: "Didiri1337",
  creatorLink: "https://github.com/didiri1337",
};

export default level;
