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
  path: "/community-level/181",
  size: 11,
  colorRegions: [
    ["H", "H", "H", "H", "H", "H", "H", "H", "H", "H", "H"],
    ["A", "A", "A", "H", "H", "H", "H", "H", "H", "H", "H"],
    ["F", "A", "B", "B", "B", "J", "J", "J", "J", "H", "H"],
    ["F", "A", "B", "E", "B", "C", "J", "C", "J", "J", "H"],
    ["A", "A", "B", "E", "B", "C", "C", "C", "D", "J", "J"],
    ["G", "G", "B", "B", "B", "C", "K", "C", "D", "D", "D"],
    ["G", "G", "G", "G", "K", "C", "K", "C", "D", "I", "D"],
    ["G", "G", "G", "G", "K", "K", "K", "K", "D", "I", "D"],
    ["G", "G", "G", "G", "G", "G", "K", "K", "K", "I", "I"],
    ["G", "G", "G", "G", "G", "G", "G", "K", "K", "I", "I"],
    ["G", "G", "G", "G", "G", "G", "K", "K", "I", "I", "I"],
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
  createdBy: "John T",
  creatorLink: "",
};

export default level;
