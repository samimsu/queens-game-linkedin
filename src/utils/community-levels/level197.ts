import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  halfBaked,
  lightOrchid,
  lightWisteria,
  malibu,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/197",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "B", "D", "D", "D", "B"],
    ["E", "C", "C", "C", "C", "C", "B", "D", "B", "B", "B"],
    ["E", "C", "F", "C", "F", "C", "F", "D", "D", "D", "B"],
    ["E", "C", "F", "C", "F", "C", "F", "F", "F", "D", "B"],
    ["E", "C", "F", "C", "F", "C", "F", "D", "D", "D", "G"],
    ["E", "E", "F", "F", "F", "F", "F", "F", "G", "G", "G"],
    ["H", "E", "E", "E", "F", "I", "F", "F", "G", "G", "G"],
    ["H", "E", "I", "I", "I", "I", "I", "I", "G", "G", "G"],
    ["H", "E", "E", "I", "I", "I", "I", "I", "G", "K", "G"],
    ["H", "E", "I", "I", "I", "I", "I", "J", "J", "K", "K"],
  ],
  regionColors: {
    A: lightWisteria,
    B: turquoiseBlue,
    C: anakiwa,
    D: malibu,
    E: halfBaked,
    F: altoMain,
    G: nomad,
    H: lightOrchid,
    I: celadon,
    J: bittersweet,
    K: saharaSand,
  },
  solutionsCount: -1,
  createdBy: "mattsemar",
  creatorLink: "https://github.com/x",
};

export default level;
