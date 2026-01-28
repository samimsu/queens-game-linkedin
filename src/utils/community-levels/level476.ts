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
  path: "/community-level/476",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "J", "J", "J", "J", "J", "J", "E"],
    ["A", "A", "A", "I", "A", "H", "H", "J", "J", "J", "E"],
    ["A", "A", "I", "C", "I", "H", "H", "I", "I", "I", "E"],
    ["A", "I", "C", "G", "C", "I", "H", "I", "C", "I", "E"],
    ["K", "E", "I", "C", "I", "H", "H", "C", "G", "C", "E"],
    ["E", "K", "H", "I", "H", "H", "C", "G", "F", "G", "C"],
    ["E", "K", "H", "H", "J", "H", "H", "C", "G", "C", "E"],
    ["E", "K", "H", "J", "B", "J", "H", "H", "C", "B", "E"],
    ["E", "K", "J", "B", "C", "B", "J", "H", "H", "B", "E"],
    ["E", "E", "K", "J", "B", "J", "E", "D", "D", "E", "E"],
    ["E", "E", "E", "E", "J", "E", "D", "E", "E", "E", "E"],
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
  createdBy: "Meyina",
  creatorLink: "https://www.instagram.com/meyina009/",
};

export default level;
