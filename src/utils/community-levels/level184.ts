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
  path: "/community-level/184",
  size: 11,
  colorRegions: [
    ["C", "C", "C", "J", "J", "J", "J", "J", "J", "I", "I"],
    ["C", "C", "C", "J", "J", "J", "J", "J", "I", "I", "I"],
    ["D", "D", "C", "B", "B", "I", "I", "I", "I", "F", "F"],
    ["D", "A", "C", "B", "A", "I", "I", "I", "I", "F", "F"],
    ["D", "A", "A", "A", "A", "H", "I", "I", "F", "F", "F"],
    ["D", "A", "A", "A", "A", "H", "K", "F", "F", "F", "F"],
    ["D", "D", "A", "A", "H", "H", "H", "F", "F", "F", "F"],
    ["D", "D", "E", "F", "F", "H", "F", "F", "F", "G", "G"],
    ["E", "E", "E", "F", "F", "F", "F", "F", "G", "G", "G"],
    ["E", "E", "E", "F", "F", "F", "F", "G", "G", "G", "G"],
    ["E", "F", "F", "F", "F", "G", "G", "G", "G", "G", "G"],
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
  createdBy: "Andrea_Cap",
  creatorLink: "https://www.instagram.com/andrea.cappellotto/",
};

export default level;
