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
  path: "/community-level/108",
  size: 10,
  colorRegions: [
    ["E", "D", "D", "D", "D", "C", "A", "A", "A", "A"],
    ["E", "D", "C", "C", "C", "C", "A", "A", "A", "A"],
    ["E", "D", "D", "D", "D", "C", "B", "B", "A", "B"],
    ["E", "E", "E", "E", "D", "D", "B", "B", "A", "B"],
    ["F", "F", "F", "E", "D", "B", "B", "B", "B", "B"],
    ["F", "E", "E", "E", "D", "H", "H", "I", "I", "J"],
    ["F", "E", "F", "F", "F", "H", "H", "I", "I", "J"],
    ["F", "F", "F", "G", "F", "F", "H", "I", "I", "J"],
    ["G", "G", "G", "G", "F", "F", "H", "J", "J", "J"],
    ["H", "H", "H", "H", "H", "H", "H", "J", "J", "J"],
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
  solutionsCount: 1965,
  createdBy: "CH",
  creatorLink: "",
};

export default level;
