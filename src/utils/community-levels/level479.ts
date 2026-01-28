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
  path: "/community-level/479",
  size: 10,
  colorRegions: [
    ["B", "B", "B", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "H", "H", "H", "H", "H", "A"],
    ["B", "B", "A", "H", "H", "H", "H", "G", "H", "A"],
    ["A", "B", "J", "A", "H", "H", "H", "H", "H", "A"],
    ["A", "J", "J", "J", "A", "I", "I", "I", "I", "A"],
    ["A", "E", "F", "J", "F", "A", "I", "I", "I", "A"],
    ["A", "E", "F", "F", "F", "D", "A", "I", "I", "A"],
    ["A", "E", "E", "F", "D", "D", "C", "A", "I", "A"],
    ["A", "E", "E", "E", "C", "C", "C", "C", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
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
  createdBy: "Meyina",
  creatorLink: "https://www.instagram.com/meyina009/",
};

export default level;
