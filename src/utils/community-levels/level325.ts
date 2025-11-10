import {
  altoMain,
  anakiwa,
  bittersweet,
  chardonnay,
  halfBaked,
  lavenderRose,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/325",
  size: 10,
  colorRegions: [
    ["I", "I", "I", "I", "I", "A", "A", "A", "A", "A"],
    ["I", "I", "I", "B", "I", "I", "A", "A", "J", "A"],
    ["B", "B", "I", "B", "I", "I", "A", "A", "J", "A"],
    ["B", "B", "B", "B", "I", "A", "A", "J", "J", "J"],
    ["H", "H", "B", "G", "I", "I", "A", "J", "F", "J"],
    ["H", "H", "H", "G", "I", "I", "J", "J", "F", "J"],
    ["H", "H", "H", "G", "G", "J", "J", "F", "F", "J"],
    ["D", "C", "H", "H", "G", "G", "F", "F", "E", "J"],
    ["D", "C", "C", "H", "G", "G", "F", "E", "E", "F"],
    ["D", "D", "C", "H", "G", "G", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: lavenderRose,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
  },
  solutionsCount: 1,
  createdBy: "TinyRic",
  creatorLink: "https://github.com/TinyRic",
};

export default level;
