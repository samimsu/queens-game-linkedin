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
} from "../colors";

const level = {
  path: "/community-level/19",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["F", "F", "F", "F", "F", "F", "F", "B", "B", "A"],
    ["E", "F", "F", "F", "F", "F", "C", "C", "B", "A"],
    ["E", "E", "E", "E", "F", "F", "C", "C", "D", "A"],
    ["G", "G", "I", "I", "F", "F", "F", "D", "D", "A"],
    ["I", "I", "I", "I", "H", "F", "F", "D", "D", "A"],
    ["I", "I", "I", "I", "H", "H", "F", "D", "D", "A"],
    ["I", "I", "J", "H", "H", "H", "F", "D", "D", "A"],
    ["I", "I", "J", "J", "J", "H", "F", "D", "D", "A"],
    ["I", "J", "J", "J", "J", "H", "F", "A", "A", "A"],
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
  },
  createdBy: "TheGreatestPaul",
};

export default level;
