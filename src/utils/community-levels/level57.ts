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
  path: "/community-level/57",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "B", "B"],
    ["A", "C", "D", "D", "D", "D", "C", "B", "B"],
    ["A", "C", "D", "F", "F", "D", "C", "C", "B"],
    ["E", "F", "F", "F", "I", "D", "B", "C", "B"],
    ["E", "H", "H", "F", "I", "D", "B", "C", "B"],
    ["E", "H", "H", "F", "I", "D", "B", "C", "B"],
    ["E", "H", "H", "G", "I", "D", "B", "C", "B"],
    ["E", "E", "E", "E", "E", "D", "B", "B", "B"],
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
  createdBy: "Ollie2020",
  creatorLink: "",
};

export default level;
