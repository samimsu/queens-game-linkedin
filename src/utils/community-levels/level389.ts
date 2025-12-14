import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lavenderRose,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/389",
  size: 11,
  colorRegions: [
    ["D", "D", "D", "D", "D", "E", "E", "B", "B", "C", "C"],
    ["D", "D", "D", "D", "D", "E", "B", "B", "C", "C", "A"],
    ["D", "D", "E", "E", "E", "E", "I", "A", "A", "A", "A"],
    ["D", "D", "D", "E", "F", "E", "I", "I", "A", "A", "K"],
    ["D", "E", "E", "E", "F", "I", "I", "J", "A", "A", "K"],
    ["D", "E", "F", "F", "F", "H", "I", "J", "A", "A", "K"],
    ["D", "E", "F", "G", "G", "H", "I", "J", "A", "A", "K"],
    ["D", "E", "G", "G", "G", "H", "I", "J", "A", "A", "K"],
    ["D", "E", "D", "G", "G", "H", "J", "J", "A", "A", "K"],
    ["D", "D", "D", "D", "H", "H", "J", "J", "A", "A", "K"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: celadon,
    B: chardonnay,
    C: saharaSand,
    D: anakiwa,
    E: bittersweet,
    F: altoMain,
    G: lavenderRose,
    H: nomad,
    I: lightWisteria,
    J: halfBaked,
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "AlliSinned",
  creatorLink: "https://github.com/AllisonDobsonM",
};

export default level;
