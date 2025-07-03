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
  path: "/community-level/106",
  size: 11,
  colorRegions: [
    ["F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F"],
    ["A", "J", "A", "A", "A", "J", "A", "A", "A", "A", "A"],
    ["C", "J", "J", "A", "J", "J", "C", "C", "C", "C", "C"],
    ["C", "J", "B", "J", "B", "J", "C", "C", "C", "C", "C"],
    ["B", "J", "B", "B", "B", "J", "B", "B", "B", "B", "B"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D"],
    ["H", "H", "H", "H", "H", "G", "I", "E", "E", "I", "D"],
    ["H", "K", "K", "K", "K", "G", "I", "I", "E", "I", "D"],
    ["H", "H", "H", "H", "K", "G", "I", "E", "I", "I", "D"],
    ["H", "K", "K", "K", "K", "G", "I", "E", "E", "I", "D"],
    ["H", "K", "K", "K", "K", "G", "G", "E", "E", "E", "E"],
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
  solutionsCount: 112812,
  createdBy: "Sharky Marky",
  creatorLink: "",
};

export default level;
