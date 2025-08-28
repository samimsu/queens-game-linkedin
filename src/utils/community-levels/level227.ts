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
  path: "/community-level/227",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "C", "A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "D", "D", "A", "A", "E", "A", "B", "B", "B"],
    ["A", "C", "D", "D", "A", "A", "E", "A", "A", "B", "B"],
    ["A", "C", "C", "C", "F", "A", "E", "A", "A", "B", "B"],
    ["G", "H", "H", "H", "F", "F", "I", "A", "A", "B", "B"],
    ["G", "H", "J", "J", "J", "J", "I", "A", "A", "B", "B"],
    ["G", "H", "J", "J", "J", "J", "I", "A", "B", "B", "B"],
    ["G", "H", "J", "J", "J", "J", "I", "I", "I", "B", "B"],
    ["G", "K", "J", "J", "K", "J", "J", "J", "J", "J", "B"],
    ["G", "K", "K", "K", "K", "K", "J", "J", "J", "J", "B"],
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
