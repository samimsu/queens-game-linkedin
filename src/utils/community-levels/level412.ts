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
  path: "/community-level/412",
  size: 10,
  colorRegions: [
    ["G", "G", "F", "F", "E", "E", "E", "E", "E", "E"],
    ["H", "G", "G", "F", "B", "A", "A", "A", "A", "E"],
    ["H", "G", "G", "F", "B", "A", "C", "C", "A", "D"],
    ["H", "B", "B", "B", "B", "A", "A", "C", "A", "D"],
    ["H", "B", "A", "A", "A", "A", "A", "A", "A", "D"],
    ["H", "I", "A", "D", "D", "D", "D", "D", "D", "D"],
    ["H", "I", "A", "D", "J", "J", "J", "J", "J", "J"],
    ["H", "I", "D", "D", "J", "I", "I", "I", "I", "I"],
    ["H", "I", "I", "I", "I", "I", "I", "I", "I", "I"],
    ["H", "H", "H", "H", "H", "H", "I", "I", "I", "I"],
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
  createdBy: "Mohamed Harby",
  creatorLink: "https://github.com/Mohamed-Harby/",
};

export default level;
