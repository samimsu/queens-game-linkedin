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
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/421",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["E", "B", "B", "E", "E", "E", "E", "C", "E", "E", "A"],
    ["E", "B", "E", "E", "E", "E", "C", "C", "E", "E", "A"],
    ["E", "E", "E", "D", "E", "E", "E", "C", "C", "C", "A"],
    ["E", "D", "D", "E", "D", "F", "D", "G", "G", "C", "A"],
    ["D", "D", "D", "E", "D", "F", "D", "G", "G", "C", "A"],
    ["D", "D", "D", "E", "E", "E", "E", "G", "E", "E", "A"],
    ["E", "E", "H", "E", "E", "E", "E", "E", "E", "E", "A"],
    ["E", "E", "H", "E", "I", "E", "E", "E", "J", "E", "A"],
    ["E", "E", "H", "E", "I", "E", "E", "J", "J", "E", "A"],
    ["E", "E", "H", "E", "E", "E", "E", "E", "E", "K", "A"],
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
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "Terziogly",
  creatorLink: "https://www.instagram.com/ekremterziogly",
};

export default level;
