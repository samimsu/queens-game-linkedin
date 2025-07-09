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
  path: "/community-level/121",
  size: 11,
  colorRegions: [
    ["E", "E", "D", "C", "H", "I", "I", "I", "I", "I", "I"],
    ["E", "E", "D", "C", "H", "H", "H", "H", "H", "I", "I"],
    ["E", "E", "D", "C", "C", "C", "H", "H", "H", "J", "I"],
    ["E", "D", "D", "C", "B", "C", "H", "J", "J", "J", "I"],
    ["E", "D", "C", "C", "B", "A", "B", "J", "J", "J", "I"],
    ["E", "D", "D", "D", "B", "A", "B", "J", "J", "J", "I"],
    ["E", "D", "E", "F", "B", "B", "B", "J", "I", "I", "I"],
    ["E", "E", "E", "F", "G", "G", "G", "K", "K", "I", "I"],
    ["E", "F", "F", "F", "G", "G", "G", "K", "K", "I", "I"],
    ["F", "F", "G", "F", "G", "G", "K", "K", "K", "K", "K"],
    ["G", "G", "G", "G", "G", "K", "K", "K", "K", "K", "K"],
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
  solutionsCount: 1401,
  createdBy: "davidpri",
  creatorLink: "",
};

export default level;
