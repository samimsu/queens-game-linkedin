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
  path: "/community-level/232",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "C", "C", "C", "C", "C", "G", "G", "I", "B"],
    ["A", "C", "C", "C", "C", "C", "G", "I", "I", "B"],
    ["A", "C", "D", "D", "E", "F", "G", "G", "I", "B"],
    ["A", "J", "D", "E", "E", "F", "G", "G", "I", "B"],
    ["A", "J", "D", "E", "F", "F", "G", "G", "I", "B"],
    ["A", "J", "G", "G", "G", "G", "G", "I", "I", "B"],
    ["A", "H", "H", "H", "H", "H", "H", "I", "I", "B"],
    ["A", "I", "I", "I", "I", "I", "I", "I", "I", "B"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "B"],
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
  createdBy: "Alexallos",
  creatorLink: "https://github.com/Alexallos",
};

export default level;
