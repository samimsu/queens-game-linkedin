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
  path: "/community-level/366",
  size: 11,
  colorRegions: [
    ["K", "K", "K", "K", "A", "A", "A", "E", "E", "E", "E"],
    ["K", "I", "I", "K", "K", "K", "A", "A", "E", "E", "E"],
    ["K", "I", "I", "I", "H", "K", "K", "K", "K", "E", "E"],
    ["I", "I", "C", "I", "H", "F", "K", "C", "C", "C", "E"],
    ["I", "C", "C", "C", "F", "B", "F", "C", "C", "C", "C"],
    ["C", "C", "C", "F", "B", "B", "B", "F", "C", "C", "C"],
    ["C", "C", "F", "B", "B", "B", "B", "B", "F", "C", "C"],
    ["C", "C", "C", "B", "G", "B", "G", "B", "C", "C", "D"],
    ["C", "C", "D", "B", "B", "B", "G", "B", "D", "D", "D"],
    ["C", "D", "D", "D", "D", "D", "J", "D", "D", "D", "D"],
    ["D", "D", "D", "D", "D", "D", "J", "J", "D", "D", "D"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
