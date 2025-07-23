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
  path: "/community-level/164",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "E", "E", "E", "I", "I"],
    ["J", "J", "A", "B", "B", "E", "D", "D", "D", "I"],
    ["J", "F", "A", "A", "B", "E", "D", "C", "I", "H"],
    ["J", "F", "F", "F", "B", "E", "D", "C", "H", "H"],
    ["J", "F", "F", "F", "B", "C", "C", "C", "H", "H"],
    ["J", "F", "F", "F", "B", "B", "B", "B", "H", "H"],
    ["J", "F", "F", "H", "B", "B", "E", "E", "E", "H"],
    ["F", "F", "F", "F", "B", "B", "G", "G", "H", "H"],
    ["F", "F", "F", "F", "B", "B", "G", "G", "G", "H"],
    ["F", "F", "F", "F", "G", "G", "G", "G", "G", "H"],
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
  createdBy: "Tim",
  creatorLink: "",
};

export default level;
