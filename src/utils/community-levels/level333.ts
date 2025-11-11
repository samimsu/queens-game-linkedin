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
  path: "/community-level/333",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "K"],
    ["A", "D", "D", "D", "D", "A", "A", "A", "A", "K", "K"],
    ["A", "D", "B", "D", "D", "D", "D", "A", "C", "K", "K"],
    ["D", "D", "B", "D", "D", "D", "D", "A", "C", "K", "K"],
    ["D", "D", "B", "B", "B", "C", "C", "C", "C", "K", "F"],
    ["D", "D", "D", "D", "B", "H", "K", "K", "K", "K", "F"],
    ["D", "D", "D", "D", "H", "H", "K", "K", "K", "F", "F"],
    ["D", "D", "I", "I", "J", "G", "K", "K", "K", "K", "F"],
    ["D", "D", "I", "I", "J", "G", "K", "K", "K", "K", "F"],
    ["D", "J", "J", "J", "J", "G", "G", "G", "G", "F", "F"],
    ["D", "J", "J", "J", "J", "E", "E", "E", "E", "E", "E"],
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
  createdBy: "Jeff",
  creatorLink: "",
};

export default level;
