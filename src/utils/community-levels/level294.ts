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
  path: "/community-level/294",
  size: 11,
  colorRegions: [
    ["C", "C", "C", "C", "C", "C", "C", "C", "J", "J", "J"],
    ["C", "C", "D", "D", "D", "C", "C", "H", "I", "J", "J"],
    ["C", "A", "A", "D", "D", "E", "E", "H", "I", "J", "K"],
    ["C", "C", "A", "A", "D", "D", "E", "I", "I", "I", "K"],
    ["C", "C", "A", "A", "D", "D", "E", "I", "E", "E", "E"],
    ["C", "A", "A", "D", "D", "E", "E", "E", "E", "E", "E"],
    ["C", "C", "A", "D", "G", "E", "G", "G", "G", "G", "E"],
    ["C", "B", "D", "D", "G", "G", "G", "G", "F", "F", "E"],
    ["B", "B", "B", "B", "F", "F", "G", "F", "F", "F", "E"],
    ["B", "F", "F", "F", "F", "F", "F", "F", "E", "E", "E"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "E", "E", "E"],
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
  createdBy: "Encom",
  creatorLink: "",
};

export default level;
