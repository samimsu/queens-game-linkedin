import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/453",
  size: 10,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["H", "H", "H", "H", "E", "E", "E", "E", "E", "E"],
    ["H", "H", "H", "H", "H", "H", "H", "H", "H", "F"],
    ["I", "F", "F", "F", "F", "F", "F", "F", "F", "F"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "B", "B"],
    ["G", "G", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["G", "G", "G", "G", "G", "G", "G", "D", "D", "D"],
    ["J", "J", "J", "D", "D", "D", "D", "D", "D", "D"],
    ["J", "J", "J", "J", "J", "J", "C", "C", "C", "C"],
    ["A", "A", "A", "A", "A", "A", "A", "C", "C", "C"],
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
    J: halfBaked,
  },
  solutionsCount: 1,
  createdBy: "Ni_e_Te",
  creatorLink: "",
};

export default level;
