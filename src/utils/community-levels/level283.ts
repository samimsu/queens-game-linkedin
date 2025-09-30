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
  path: "/community-level/283",
  size: 11,
  colorRegions: [
    ["F", "F", "F", "F", "F", "F", "F", "F", "F", "F", "F"],
    ["E", "E", "K", "K", "K", "K", "K", "F", "J", "J", "F"],
    ["E", "E", "K", "K", "K", "K", "K", "F", "F", "F", "F"],
    ["C", "C", "C", "I", "I", "I", "K", "F", "F", "F", "F"],
    ["C", "A", "C", "I", "I", "I", "K", "F", "F", "F", "F"],
    ["C", "C", "C", "C", "I", "I", "K", "F", "F", "F", "F"],
    ["D", "D", "D", "C", "C", "C", "K", "F", "F", "F", "F"],
    ["D", "D", "D", "C", "B", "C", "H", "H", "H", "F", "F"],
    ["D", "D", "H", "C", "C", "C", "H", "H", "H", "F", "F"],
    ["D", "D", "H", "H", "H", "H", "H", "H", "H", "G", "F"],
    ["D", "D", "D", "G", "G", "G", "G", "G", "G", "G", "G"],
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
  createdBy: "HZ",
  creatorLink: "",
};

export default level;
