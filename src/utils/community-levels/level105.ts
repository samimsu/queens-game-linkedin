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
  path: "/community-level/105",
  size: 10,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "A", "A", "A", "C"],
    ["A", "D", "D", "D", "D", "D", "H", "H", "A", "C"],
    ["A", "D", "D", "A", "J", "J", "H", "H", "A", "C"],
    ["A", "D", "D", "A", "J", "J", "H", "H", "A", "A"],
    ["A", "E", "A", "A", "J", "J", "H", "H", "I", "A"],
    ["A", "E", "A", "J", "J", "J", "H", "H", "I", "A"],
    ["A", "E", "A", "J", "J", "J", "H", "H", "I", "A"],
    ["A", "E", "A", "A", "G", "G", "G", "G", "G", "A"],
    ["A", "E", "F", "A", "A", "G", "G", "A", "A", "A"],
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
  solutionsCount: 22,
  createdBy: "JacktheEngineer121",
  creatorLink: "",
};

export default level;
