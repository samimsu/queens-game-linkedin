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
  path: "/community-level/378",
  size: 11,
  colorRegions: [
    ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["C", "F", "F", "F", "C", "H", "H", "C", "A", "A", "A"],
    ["C", "F", "D", "F", "C", "H", "C", "C", "D", "A", "A"],
    ["C", "F", "D", "D", "C", "C", "C", "D", "D", "E", "A"],
    ["C", "C", "D", "D", "D", "C", "D", "D", "D", "E", "A"],
    ["C", "C", "D", "I", "D", "D", "D", "K", "D", "E", "A"],
    ["C", "C", "D", "I", "I", "D", "K", "K", "D", "E", "A"],
    ["C", "C", "D", "B", "K", "K", "K", "G", "D", "E", "E"],
    ["C", "C", "D", "B", "K", "K", "K", "G", "D", "J", "J"],
    ["C", "C", "C", "B", "B", "B", "K", "G", "K", "J", "K"],
    ["C", "C", "C", "K", "K", "K", "K", "K", "K", "K", "K"],
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
  createdBy: "ddevil",
  creatorLink: "",
};

export default level;
