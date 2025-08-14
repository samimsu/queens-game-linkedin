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
  path: "/community-level/191",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "C", "C", "C"],
    ["A", "A", "A", "D", "D", "D", "E", "B", "B", "C"],
    ["G", "G", "A", "D", "D", "E", "E", "E", "E", "C"],
    ["G", "F", "A", "D", "D", "H", "H", "E", "E", "C"],
    ["G", "F", "A", "F", "D", "I", "I", "E", "E", "C"],
    ["G", "F", "F", "F", "F", "F", "I", "I", "C", "C"],
    ["G", "F", "F", "F", "F", "F", "F", "I", "C", "C"],
    ["G", "F", "F", "F", "F", "F", "F", "I", "I", "I"],
    ["F", "F", "F", "F", "F", "F", "F", "J", "J", "I"],
    ["F", "F", "F", "J", "J", "J", "J", "J", "J", "J"],
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
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
