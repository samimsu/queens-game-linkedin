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
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/462",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "A", "A", "A"],
    ["A", "D", "D", "D", "B", "B", "D", "B", "C", "C", "C"],
    ["A", "D", "D", "D", "D", "D", "D", "C", "C", "E", "C"],
    ["A", "D", "G", "D", "D", "D", "D", "C", "B", "E", "C"],
    ["A", "D", "G", "G", "G", "G", "F", "C", "B", "E", "C"],
    ["A", "D", "H", "H", "I", "F", "F", "C", "B", "E", "C"],
    ["A", "D", "H", "I", "I", "F", "E", "E", "E", "E", "C"],
    ["A", "D", "H", "J", "I", "F", "E", "E", "E", "K", "C"],
    ["A", "D", "H", "J", "I", "F", "E", "E", "C", "K", "C"],
    ["A", "H", "H", "C", "C", "C", "C", "C", "C", "C", "C"],
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
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "Daan",
  creatorLink: "",
};

export default level;
