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
  path: "/community-level/138",
  size: 11,
  colorRegions: [
    ["J", "J", "J", "J", "J", "A", "J", "J", "J", "J", "J"],
    ["J", "J", "J", "J", "B", "J", "J", "J", "J", "J", "J"],
    ["J", "J", "J", "J", "B", "J", "C", "J", "J", "J", "J"],
    ["J", "J", "D", "J", "J", "J", "C", "J", "J", "J", "J"],
    ["J", "J", "D", "J", "J", "J", "J", "J", "E", "J", "J"],
    ["F", "J", "J", "J", "J", "J", "J", "J", "E", "J", "J"],
    ["F", "J", "J", "J", "J", "J", "J", "J", "J", "J", "G"],
    ["J", "J", "J", "H", "J", "J", "J", "J", "J", "J", "G"],
    ["J", "J", "J", "H", "J", "J", "J", "I", "J", "J", "J"],
    ["J", "J", "J", "J", "J", "J", "J", "I", "J", "J", "J"],
    ["J", "K", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
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
  createdBy: "leoancab",
  creatorLink: "https://github.com/leoancab",
};

export default level;
