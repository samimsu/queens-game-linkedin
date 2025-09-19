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
  path: "/community-level/269",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "C", "C", "C", "C"],
    ["D", "D", "D", "A", "B", "B", "B", "B", "B", "C", "A"],
    ["D", "E", "D", "A", "A", "A", "B", "B", "C", "C", "A"],
    ["D", "E", "E", "E", "E", "A", "A", "A", "A", "C", "A"],
    ["D", "E", "D", "E", "E", "A", "E", "A", "A", "A", "A"],
    ["D", "D", "D", "E", "E", "E", "E", "E", "F", "A", "A"],
    ["D", "D", "J", "J", "J", "J", "E", "F", "F", "F", "F"],
    ["K", "K", "J", "I", "I", "F", "E", "F", "F", "F", "F"],
    ["K", "J", "J", "I", "I", "F", "E", "F", "F", "F", "F"],
    ["K", "K", "K", "H", "I", "F", "F", "F", "G", "F", "F"],
    ["H", "H", "H", "H", "I", "F", "G", "G", "G", "G", "F"],
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
  createdBy: "Leffno",
  creatorLink: "",
};

export default level;
