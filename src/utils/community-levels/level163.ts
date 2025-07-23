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
  path: "/community-level/163",
  size: 11,
  colorRegions: [
    ["H", "H", "H", "H", "H", "H", "H", "B", "B", "B", "B"],
    ["H", "C", "C", "C", "C", "H", "H", "H", "H", "H", "B"],
    ["F", "C", "F", "C", "C", "C", "C", "H", "B", "B", "B"],
    ["F", "F", "F", "C", "J", "C", "H", "H", "I", "B", "B"],
    ["F", "F", "J", "C", "J", "J", "H", "I", "I", "I", "I"],
    ["F", "J", "J", "D", "D", "D", "H", "I", "G", "G", "I"],
    ["F", "J", "J", "D", "E", "D", "H", "I", "I", "I", "I"],
    ["J", "J", "J", "D", "E", "D", "H", "I", "I", "A", "A"],
    ["K", "K", "K", "D", "D", "H", "H", "I", "I", "I", "I"],
    ["K", "K", "K", "K", "K", "K", "H", "H", "H", "H", "H"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "H"],
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
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
