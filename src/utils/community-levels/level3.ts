import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level3 = {
  path: "/community-level/3",
  size: 7,
  colorRegions: [
    ["B", "B", "B", "C", "C", "C", "C"],
    ["B", "B", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "C", "E", "E", "E"],
    ["A", "D", "D", "D", "E", "E", "E"],
    ["A", "D", "D", "D", "E", "E", "E"],
    ["A", "D", "D", "D", "F", "F", "G"],
    ["A", "A", "A", "A", "F", "F", "F"],
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
  createdBy: "akraja1",
  creatorLink: "https://github.com/akraja1",
};

export default level3;
