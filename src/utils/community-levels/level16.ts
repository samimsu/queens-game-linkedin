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
  path: "/community-level/16",
  size: 11,
  colorRegions: [
    ["A", "B", "B", "A", "C", "C", "D", "D", "E", "B", "B"],
    ["B", "A", "B", "E", "A", "C", "F", "G", "E", "E", "B"],
    ["B", "B", "A", "E", "E", "A", "H", "I", "G", "E", "E"],
    ["A", "E", "E", "A", "J", "K", "A", "H", "I", "G", "D"],
    ["C", "A", "E", "J", "A", "J", "K", "A", "H", "F", "D"],
    ["C", "C", "A", "K", "J", "A", "J", "K", "A", "C", "C"],
    ["D", "F", "H", "A", "K", "J", "A", "J", "E", "A", "C"],
    ["D", "G", "I", "H", "A", "K", "J", "A", "E", "E", "A"],
    ["E", "E", "G", "I", "H", "A", "E", "E", "A", "B", "B"],
    ["B", "E", "E", "G", "F", "C", "A", "E", "B", "A", "B"],
    ["B", "B", "E", "D", "D", "C", "C", "A", "B", "B", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: celadon,
    D: nomad,
    E: anakiwa,
    F: halfBaked,
    G: lightOrchid,
    H: altoMain,
    I: turquoiseBlue,
    J: saharaSand,
    K: bittersweet,
  },
  solutionsCount: 56,
  createdBy: "trystan4861",
  creatorLink: "https://github.com/Trystan4861",
};

export default level;
