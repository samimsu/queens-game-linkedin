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
  path: "/community-level/6",
  size: 11,
  colorRegions: [
    ["E", "E", "E", "E", "E", "B", "B", "I", "A", "A", "A"],
    ["E", "E", "G", "G", "G", "B", "B", "I", "A", "I", "A"],
    ["E", "E", "G", "B", "B", "B", "B", "I", "A", "I", "A"],
    ["E", "E", "E", "I", "I", "B", "B", "I", "I", "I", "A"],
    ["I", "E", "I", "I", "I", "I", "I", "I", "I", "A", "A"],
    ["I", "I", "I", "I", "I", "D", "H", "I", "I", "I", "I"],
    ["I", "I", "D", "D", "D", "D", "H", "H", "I", "H", "H"],
    ["I", "D", "D", "D", "D", "K", "K", "H", "H", "H", "H"],
    ["I", "D", "C", "F", "F", "F", "F", "F", "F", "J", "H"],
    ["I", "D", "C", "C", "C", "F", "F", "J", "J", "J", "H"],
    ["I", "F", "F", "F", "F", "F", "F", "F", "F", "H", "H"],
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
  createdBy: "MoosesooM",
  creatorLink: "https://github.com/MooseMoosesMeese",
};

export default level;
