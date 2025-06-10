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
  path: "/community-level/41",
  size: 11,
  colorRegions: [
    ["A", "A", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
    ["K", "A", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
    ["K", "B", "B", "K", "K", "K", "K", "K", "K", "J", "J"],
    ["K", "K", "B", "K", "K", "K", "K", "K", "K", "K", "J"],
    ["K", "K", "C", "C", "K", "K", "K", "K", "K", "K", "I"],
    ["K", "K", "K", "C", "K", "K", "K", "K", "K", "I", "I"],
    ["K", "K", "K", "D", "D", "K", "K", "K", "K", "H", "K"],
    ["K", "K", "K", "K", "D", "K", "K", "K", "H", "H", "K"],
    ["K", "K", "K", "K", "E", "E", "K", "K", "G", "K", "K"],
    ["K", "K", "K", "K", "K", "E", "F", "G", "G", "K", "K"],
    ["K", "K", "K", "K", "K", "F", "F", "K", "K", "K", "K"],
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
  createdBy: "egill8000",
  creatorLink: "https://github.com/egill8000",
};

export default level;
