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
  path: "/community-level/200",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["C", "D", "D", "D", "B", "B", "B", "B", "B", "B", "B"],
    ["C", "C", "C", "D", "B", "E", "E", "E", "B", "B", "B"],
    ["F", "D", "D", "D", "B", "E", "G", "E", "B", "B", "B"],
    ["F", "D", "H", "H", "H", "E", "G", "E", "I", "I", "I"],
    ["F", "D", "D", "D", "H", "E", "G", "E", "I", "J", "I"],
    ["F", "F", "H", "H", "H", "E", "E", "E", "I", "J", "I"],
    ["F", "H", "H", "H", "H", "H", "H", "H", "I", "J", "I"],
    ["K", "H", "K", "H", "K", "H", "H", "H", "I", "I", "I"],
    ["K", "K", "K", "K", "K", "K", "H", "H", "K", "K", "K"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "K"],
  ],
  regionColors: {
    A: lightWisteria,
    B: nomad,
    C: saharaSand,
    D: chardonnay,
    E: anakiwa,
    F: lightOrchid,
    G: celadon,
    H: halfBaked,
    I: altoMain,
    J: bittersweet,
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
