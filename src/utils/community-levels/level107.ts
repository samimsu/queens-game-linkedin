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
  path: "/community-level/107",
  size: 11,
  colorRegions: [
    ["B", "C", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
    ["B", "C", "J", "J", "I", "I", "I", "I", "J", "J", "J"],
    ["B", "C", "D", "I", "I", "I", "I", "I", "J", "J", "H"],
    ["C", "C", "D", "I", "I", "E", "E", "E", "E", "E", "H"],
    ["D", "D", "D", "E", "I", "E", "H", "H", "H", "H", "H"],
    ["D", "D", "D", "E", "E", "E", "H", "H", "H", "K", "K"],
    ["D", "D", "D", "A", "A", "A", "A", "A", "H", "K", "K"],
    ["F", "F", "A", "A", "G", "G", "G", "A", "H", "K", "K"],
    ["F", "F", "A", "G", "G", "G", "A", "A", "K", "K", "K"],
    ["G", "F", "F", "F", "G", "K", "A", "A", "K", "K", "K"],
    ["G", "G", "G", "G", "G", "K", "K", "K", "K", "K", "K"],
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
  solutionsCount: 120,
  createdBy: "wheezingfawn",
  creatorLink: "",
};

export default level;
