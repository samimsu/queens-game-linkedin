import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/126",
  size: 9,
  colorRegions: [
    ["E", "E", "H", "H", "G", "F", "C", "F", "F"],
    ["E", "E", "H", "H", "G", "F", "F", "F", "F"],
    ["E", "E", "E", "G", "G", "G", "G", "F", "F"],
    ["G", "G", "G", "G", "F", "F", "F", "F", "F"],
    ["D", "D", "D", "G", "A", "I", "I", "I", "I"],
    ["D", "D", "D", "D", "I", "I", "C", "C", "C"],
    ["B", "B", "H", "H", "I", "C", "C", "C", "C"],
    ["B", "B", "H", "H", "I", "H", "H", "H", "C"],
    ["B", "B", "B", "I", "I", "H", "H", "C", "C"],
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
  },
  solutionsCount: 1,
  createdBy: "CharSiu",
  creatorLink: "",
};

export default level;
