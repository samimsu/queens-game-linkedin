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
  path: "/community-level/161",
  size: 9,
  colorRegions: [
    ["A", "A", "E", "E", "E", "I", "I", "I", "I"],
    ["A", "A", "E", "E", "E", "E", "E", "E", "I"],
    ["A", "G", "E", "E", "E", "E", "E", "E", "I"],
    ["A", "G", "G", "E", "E", "E", "E", "E", "D"],
    ["G", "G", "G", "E", "E", "E", "F", "E", "D"],
    ["G", "G", "E", "E", "E", "E", "F", "D", "D"],
    ["E", "E", "E", "C", "C", "C", "F", "F", "D"],
    ["B", "B", "B", "B", "B", "C", "C", "F", "D"],
    ["H", "B", "B", "B", "B", "D", "D", "D", "D"],
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
  createdBy: "Lordy",
  creatorLink: "",
};

export default level;
