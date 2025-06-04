import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/24",
  size: 8,
  colorRegions: [
    ["C", "C", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "B", "B", "D", "D", "D", "C"],
    ["A", "B", "B", "B", "D", "D", "D", "C"],
    ["A", "E", "E", "E", "D", "D", "D", "H"],
    ["E", "E", "F", "F", "G", "D", "D", "H"],
    ["E", "E", "F", "F", "G", "D", "H", "H"],
    ["E", "F", "F", "F", "G", "H", "H", "H"],
    ["E", "F", "F", "F", "G", "G", "H", "H"],
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
  },
  createdBy: "khanhvd",
  creatorLink: "https://github.com/KhanhNabule",
};

export default level;
