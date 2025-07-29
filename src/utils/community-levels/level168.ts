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
  path: "/community-level/168",
  size: 9,
  colorRegions: [
    ["B", "G", "G", "H", "H", "I", "I", "I", "I"],
    ["B", "B", "G", "G", "H", "H", "I", "I", "I"],
    ["A", "B", "B", "G", "G", "H", "H", "I", "I"],
    ["A", "A", "B", "B", "G", "G", "H", "H", "I"],
    ["C", "A", "A", "B", "B", "G", "G", "H", "H"],
    ["C", "C", "A", "A", "B", "B", "G", "G", "H"],
    ["D", "C", "C", "A", "E", "B", "B", "G", "G"],
    ["D", "D", "D", "D", "E", "F", "B", "G", "G"],
    ["E", "E", "E", "E", "E", "F", "F", "F", "G"],
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
  createdBy: "otsohellman",
  creatorLink: "https://github.com/OtsoHellman/",
};

export default level;
