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
  path: "/community-level/424",
  size: 10,
  colorRegions: [
    ["A", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
    ["A", "B", "J", "J", "J", "F", "F", "F", "J", "J"],
    ["A", "B", "C", "J", "J", "J", "J", "J", "J", "J"],
    ["J", "B", "C", "J", "J", "J", "J", "J", "J", "J"],
    ["J", "J", "C", "D", "J", "E", "J", "J", "J", "J"],
    ["J", "J", "J", "D", "J", "E", "J", "G", "J", "J"],
    ["J", "J", "J", "D", "J", "E", "J", "G", "J", "J"],
    ["J", "J", "J", "J", "J", "J", "J", "G", "J", "H"],
    ["J", "J", "I", "I", "I", "J", "J", "J", "J", "H"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "H"],
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
  solutionsCount: 1,
  createdBy: "Evie",
  creatorLink: "",
};

export default level;
