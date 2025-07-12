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
  path: "/community-level/136",
  size: 11,
  colorRegions: [
    ["A", "A", "H", "H", "H", "D", "D", "C", "C", "C", "C"],
    ["B", "A", "A", "H", "H", "D", "D", "D", "D", "C", "C"],
    ["B", "B", "A", "A", "H", "D", "D", "D", "D", "E", "E"],
    ["B", "B", "B", "A", "H", "H", "D", "F", "F", "F", "E"],
    ["A", "A", "B", "A", "I", "I", "I", "F", "F", "F", "E"],
    ["A", "A", "A", "A", "J", "I", "I", "F", "F", "F", "E"],
    ["A", "A", "A", "A", "J", "I", "I", "G", "G", "F", "E"],
    ["A", "A", "A", "J", "J", "J", "J", "J", "G", "F", "E"],
    ["K", "K", "J", "J", "J", "G", "G", "G", "G", "F", "E"],
    ["K", "K", "K", "K", "G", "G", "G", "G", "G", "F", "E"],
    ["K", "K", "K", "K", "K", "G", "G", "G", "G", "F", "E"],
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
  solutionsCount: 22230,
  createdBy: "NoName",
  creatorLink: "",
};

export default level;
