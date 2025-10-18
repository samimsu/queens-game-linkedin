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
  path: "/community-level/298",
  size: 9,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["H", "H", "E", "E", "E", "E", "E", "E", "E"],
    ["H", "H", "E", "A", "A", "A", "E", "E", "E"],
    ["H", "E", "E", "B", "B", "A", "E", "E", "E"],
    ["H", "E", "E", "E", "B", "A", "E", "F", "F"],
    ["H", "H", "H", "B", "B", "B", "D", "G", "F"],
    ["H", "I", "H", "C", "D", "D", "D", "G", "F"],
    ["I", "I", "H", "C", "D", "C", "F", "G", "F"],
    ["I", "I", "H", "C", "C", "C", "F", "F", "F"],
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
  createdBy: "Silver Flame",
  creatorLink: "",
};

export default level;
