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
  path: "/community-level/328",
  size: 10,
  colorRegions: [
    ["G", "G", "G", "J", "J", "J", "J", "J", "J", "J"],
    ["G", "G", "J", "J", "I", "I", "I", "I", "J", "J"],
    ["G", "D", "D", "D", "D", "B", "I", "J", "J", "J"],
    ["G", "A", "A", "D", "B", "B", "I", "J", "C", "J"],
    ["A", "A", "D", "D", "B", "F", "F", "J", "C", "J"],
    ["A", "A", "D", "D", "B", "F", "J", "J", "C", "C"],
    ["A", "A", "D", "D", "B", "B", "J", "H", "H", "C"],
    ["E", "A", "D", "D", "D", "B", "J", "H", "J", "C"],
    ["E", "E", "E", "E", "D", "D", "J", "J", "J", "E"],
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
