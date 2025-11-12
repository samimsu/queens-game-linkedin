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
  path: "/community-level/341",
  size: 7,
  colorRegions: [
    ["A", "C", "D", "E", "G", "G", "F"],
    ["B", "A", "C", "D", "E", "G", "G"],
    ["C", "C", "A", "C", "D", "E", "G"],
    ["D", "B", "B", "A", "C", "D", "E"],
    ["E", "D", "C", "C", "A", "C", "D"],
    ["F", "E", "D", "B", "B", "A", "C"],
    ["F", "F", "E", "D", "C", "B", "A"],
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
  solutionsCount: 1,
  createdBy: "Kamil K",
  creatorLink: "https://www.instagram.com/0kalim0?igsh=bWd0d3F0OXZ1MzBt",
};

export default level;
