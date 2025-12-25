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
  path: "/community-level/400",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "C", "C", "C", "E", "E", "E", "E", "E", "E", "E"],
    ["A", "A", "B", "C", "E", "F", "F", "F", "F", "F", "F"],
    ["A", "A", "B", "C", "E", "F", "G", "G", "G", "G", "G"],
    ["A", "A", "B", "C", "D", "D", "H", "H", "G", "I", "I"],
    ["A", "A", "B", "C", "D", "D", "H", "H", "G", "I", "I"],
    ["A", "B", "B", "C", "D", "D", "D", "D", "D", "D", "K"],
    ["A", "B", "C", "C", "D", "J", "J", "J", "K", "K", "K"],
    ["A", "B", "C", "D", "D", "J", "J", "J", "J", "K", "K"],
    ["A", "B", "C", "D", "D", "J", "J", "K", "K", "K", "K"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
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
  createdBy: "varman",
  creatorLink: "",
};

export default level;
