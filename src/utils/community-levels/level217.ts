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
  path: "/community-level/217",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "C"],
    ["A", "A", "A", "A", "A", "A", "B", "B", "B", "C", "C"],
    ["A", "A", "A", "A", "A", "B", "B", "B", "B", "C", "C"],
    ["D", "D", "A", "A", "A", "A", "A", "B", "B", "C", "E"],
    ["D", "A", "A", "F", "F", "G", "B", "B", "B", "C", "E"],
    ["D", "D", "D", "F", "G", "G", "G", "B", "B", "E", "E"],
    ["D", "H", "D", "F", "F", "G", "F", "B", "E", "E", "E"],
    ["I", "H", "H", "F", "F", "F", "F", "F", "E", "E", "E"],
    ["I", "I", "I", "J", "J", "J", "F", "F", "F", "F", "F"],
    ["K", "I", "K", "J", "J", "J", "F", "F", "F", "F", "F"],
    ["K", "K", "K", "K", "K", "K", "F", "F", "F", "F", "F"],
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
