import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/23",
  size: 7,
  colorRegions: [
    ["E", "G", "G", "G", "G", "G", "G"],
    ["E", "E", "E", "E", "E", "E", "E"],
    ["E", "B", "B", "E", "A", "E", "E"],
    ["E", "E", "B", "E", "A", "E", "F"],
    ["E", "E", "B", "E", "A", "E", "E"],
    ["E", "C", "C", "D", "D", "E", "E"],
    ["C", "C", "C", "D", "D", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  createdBy: "saletype",
  creatorLink: "https://github.com/boulledogue",
};

export default level;
