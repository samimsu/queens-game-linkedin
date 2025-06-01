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
  path: "/community-level/5",
  size: 10,
  colorRegions: [
    ["I", "I", "I", "I", "I", "I", "G", "G", "G", "G"],
    ["A", "A", "A", "I", "I", "I", "G", "G", "G", "G"],
    ["F", "B", "A", "I", "I", "I", "I", "G", "G", "G"],
    ["F", "F", "B", "B", "F", "I", "I", "G", "G", "G"],
    ["F", "F", "C", "B", "F", "F", "I", "F", "G", "G"],
    ["H", "F", "C", "C", "J", "F", "I", "F", "I", "G"],
    ["H", "F", "F", "D", "C", "F", "F", "F", "I", "I"],
    ["H", "H", "H", "D", "D", "D", "I", "I", "I", "J"],
    ["H", "H", "H", "H", "E", "D", "I", "I", "I", "J"],
    ["H", "H", "H", "H", "E", "I", "I", "I", "J", "J"],
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
  createdBy: "zimooo2",
  creatorLink: "https://www.freischuetz.org/",
};

export default level;
