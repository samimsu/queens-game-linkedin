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
  path: "/community-level/142",
  size: 11,
  colorRegions: [
    ["A", "A", "E", "E", "F", "F", "F", "F", "F", "F", "F"],
    ["B", "A", "E", "E", "E", "E", "E", "E", "E", "F", "F"],
    ["C", "A", "G", "G", "G", "G", "F", "F", "E", "F", "F"],
    ["C", "A", "G", "G", "G", "G", "F", "F", "F", "F", "F"],
    ["C", "A", "G", "G", "G", "G", "G", "H", "H", "I", "I"],
    ["C", "C", "G", "G", "G", "G", "G", "I", "I", "I", "I"],
    ["C", "C", "C", "C", "C", "C", "K", "I", "K", "K", "J"],
    ["C", "C", "C", "K", "K", "K", "K", "I", "K", "J", "J"],
    ["C", "C", "C", "K", "K", "J", "K", "I", "K", "J", "J"],
    ["C", "C", "C", "K", "K", "J", "K", "K", "K", "K", "J"],
    ["D", "D", "D", "J", "J", "J", "J", "J", "J", "J", "J"],
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
