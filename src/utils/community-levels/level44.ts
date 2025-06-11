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
  path: "/community-level/44",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B", "F", "F"],
    ["D", "C", "B", "B", "B", "B", "B", "B", "B", "D", "F"],
    ["D", "C", "C", "C", "C", "C", "D", "D", "D", "D", "F"],
    ["D", "D", "D", "D", "D", "D", "D", "E", "E", "E", "F"],
    ["D", "E", "E", "E", "E", "E", "E", "E", "E", "E", "F"],
    ["D", "H", "H", "H", "H", "H", "H", "E", "E", "E", "F"],
    ["K", "K", "H", "H", "H", "H", "H", "H", "F", "F", "F"],
    ["K", "K", "K", "H", "H", "H", "H", "H", "H", "G", "G"],
    ["K", "K", "K", "J", "J", "I", "I", "G", "G", "G", "G"],
    ["K", "K", "K", "J", "J", "J", "I", "I", "I", "G", "I"],
    ["K", "K", "K", "K", "J", "J", "J", "J", "I", "I", "I"],
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
  solutionsCount: 15559,
  createdBy: "Ayoub Naman",
  creatorLink: "https://www.linkedin.com/in/ayoubnaman/",
};

export default level;
