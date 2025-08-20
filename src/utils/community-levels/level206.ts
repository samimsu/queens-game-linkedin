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
  path: "/community-level/206",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "A", "J", "J", "J", "I", "I", "A"],
    ["A", "B", "A", "B", "D", "D", "D", "J", "A", "A", "A"],
    ["A", "B", "B", "B", "D", "J", "J", "J", "F", "F", "A"],
    ["A", "B", "C", "B", "D", "D", "D", "A", "F", "A", "A"],
    ["A", "A", "C", "C", "C", "A", "A", "A", "F", "F", "A"],
    ["A", "A", "C", "A", "C", "A", "A", "A", "F", "A", "A"],
    ["A", "H", "C", "C", "C", "A", "E", "A", "F", "F", "A"],
    ["A", "H", "A", "A", "E", "E", "E", "A", "A", "A", "A"],
    ["A", "H", "H", "H", "E", "A", "E", "A", "G", "G", "K"],
    ["A", "H", "A", "H", "E", "E", "E", "G", "G", "K", "K"],
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
  createdBy: "Catdaddy",
  creatorLink: "",
};

export default level;
