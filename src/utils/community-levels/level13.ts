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
  path: "/community-level/13",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "H", "H", "H", "H", "I", "I"],
    ["A", "A", "A", "C", "H", "G", "H", "I", "I", "I"],
    ["A", "A", "C", "C", "H", "G", "H", "H", "I", "I"],
    ["C", "A", "C", "G", "G", "G", "F", "H", "H", "I"],
    ["C", "C", "C", "C", "G", "G", "F", "H", "I", "I"],
    ["C", "C", "B", "C", "C", "F", "F", "D", "J", "J"],
    ["B", "B", "B", "E", "F", "F", "D", "D", "J", "J"],
    ["B", "E", "E", "E", "E", "D", "D", "D", "D", "J"],
    ["B", "B", "E", "E", "D", "D", "D", "D", "D", "J"],
    ["B", "B", "B", "B", "B", "D", "J", "J", "J", "J"],
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
  solutionsCount: 5839,
  createdBy: "Yakoy U'Kugura",
};

export default level;
