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
  path: "/community-level/203",
  size: 11,
  colorRegions: [
    ["A", "A", "B", "B", "B", "B", "C", "C", "C", "C", "D"],
    ["A", "B", "B", "B", "B", "E", "C", "D", "D", "D", "D"],
    ["A", "E", "B", "B", "B", "E", "C", "D", "D", "E", "D"],
    ["A", "E", "B", "B", "B", "E", "D", "D", "D", "E", "D"],
    ["A", "E", "E", "B", "B", "E", "D", "D", "E", "E", "F"],
    ["G", "G", "E", "E", "B", "E", "D", "E", "E", "F", "F"],
    ["G", "G", "H", "E", "E", "E", "E", "E", "I", "F", "F"],
    ["G", "G", "H", "H", "E", "E", "E", "J", "I", "F", "F"],
    ["G", "G", "G", "H", "H", "E", "J", "J", "J", "F", "F"],
    ["G", "K", "G", "H", "H", "E", "J", "J", "J", "F", "J"],
    ["K", "K", "G", "H", "H", "E", "J", "J", "J", "J", "J"],
  ],
  regionColors: {
    A: anakiwa,
    B: lightWisteria,
    C: chardonnay,
    D: altoMain,
    E: bittersweet,
    F: lightOrchid,
    G: nomad,
    H: turquoiseBlue,
    I: saharaSand,
    J: celadon,
    K: halfBaked,
  },
  solutionsCount: 1,
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
