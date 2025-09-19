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
  path: "/community-level/272",
  size: 11,
  colorRegions: [
    ["J", "J", "J", "I", "J", "J", "J", "J", "J", "J", "J"],
    ["J", "J", "I", "I", "G", "G", "H", "H", "J", "J", "J"],
    ["J", "J", "J", "I", "I", "G", "H", "H", "J", "F", "J"],
    ["J", "J", "K", "C", "C", "C", "H", "B", "J", "J", "J"],
    ["J", "K", "K", "C", "C", "C", "B", "B", "B", "J", "J"],
    ["J", "K", "K", "C", "C", "C", "J", "J", "J", "J", "J"],
    ["J", "E", "E", "C", "C", "J", "J", "J", "J", "J", "D"],
    ["J", "E", "A", "A", "A", "A", "J", "J", "J", "J", "D"],
    ["E", "E", "J", "J", "J", "J", "J", "J", "J", "D", "D"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "D", "D"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
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
  createdBy: "Cas",
  creatorLink: "",
};

export default level;
