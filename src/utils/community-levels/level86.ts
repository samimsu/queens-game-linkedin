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
  path: "/community-level/86",
  size: 10,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
    ["E", "E", "G", "G", "G", "G", "G", "G", "E", "E"],
    ["E", "F", "F", "J", "J", "J", "A", "J", "J", "J"],
    ["E", "B", "F", "J", "A", "A", "A", "J", "C", "J"],
    ["E", "B", "F", "J", "A", "D", "A", "J", "C", "J"],
    ["E", "B", "B", "J", "A", "A", "A", "J", "C", "C"],
    ["E", "B", "J", "J", "I", "I", "J", "J", "J", "H"],
    ["E", "B", "H", "J", "J", "J", "J", "J", "H", "H"],
    ["E", "H", "H", "H", "J", "J", "J", "H", "H", "H"],
    ["E", "H", "H", "H", "H", "J", "H", "J", "H", "H"],
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
  createdBy: "kylejenx",
  creatorLink: "https://github.com/kylejenx7",
};

export default level;
