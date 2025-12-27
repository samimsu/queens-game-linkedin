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
  path: "/community-level/401",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "H", "I", "I", "I", "I", "I"],
    ["A", "A", "E", "E", "A", "H", "H", "H", "G", "G", "I"],
    ["A", "A", "E", "E", "A", "H", "G", "G", "G", "G", "I"],
    ["A", "E", "E", "A", "A", "H", "H", "H", "H", "G", "I"],
    ["B", "E", "E", "A", "F", "G", "G", "G", "G", "G", "I"],
    ["B", "A", "A", "A", "F", "B", "K", "I", "I", "I", "I"],
    ["B", "B", "B", "B", "B", "B", "K", "K", "K", "K", "I"],
    ["B", "C", "B", "D", "D", "J", "J", "J", "J", "K", "I"],
    ["B", "C", "C", "D", "D", "J", "I", "I", "I", "K", "I"],
    ["B", "B", "C", "C", "D", "J", "I", "I", "I", "I", "I"],
    ["B", "B", "B", "B", "D", "J", "J", "J", "J", "J", "I"],
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
  solutionsCount: -1,
  createdBy: "JauntxoAgurgarria",
  creatorLink: "https://github.com/JauntxoAgurgarria",
};

export default level;
