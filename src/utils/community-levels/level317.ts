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
  path: "/community-level/317",
  size: 11,
  colorRegions: [
    ["K", "K", "K", "K", "K", "B", "B", "B", "B", "B", "B"],
    ["K", "I", "I", "I", "I", "I", "B", "B", "G", "C", "B"],
    ["K", "K", "K", "I", "I", "B", "B", "G", "G", "G", "B"],
    ["K", "K", "K", "I", "I", "A", "G", "G", "G", "G", "B"],
    ["K", "I", "I", "I", "A", "A", "A", "G", "G", "G", "G"],
    ["K", "K", "K", "D", "D", "A", "E", "E", "G", "G", "G"],
    ["K", "K", "K", "K", "D", "D", "E", "E", "H", "G", "G"],
    ["K", "K", "K", "K", "H", "D", "E", "F", "H", "H", "H"],
    ["K", "K", "H", "H", "H", "H", "H", "F", "H", "H", "H"],
    ["J", "J", "H", "H", "H", "H", "F", "F", "H", "H", "H"],
    ["J", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
