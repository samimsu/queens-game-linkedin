import {
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/407",
  size: 9,
  colorRegions: [
    ["E", "E", "E", "E", "E", "I", "I", "I", "I"],
    ["E", "E", "H", "H", "H", "I", "H", "H", "I"],
    ["E", "E", "H", "H", "H", "I", "H", "I", "I"],
    ["H", "H", "H", "H", "H", "H", "H", "I", "D"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "D"],
    ["F", "G", "G", "G", "F", "D", "D", "I", "D"],
    ["G", "G", "G", "C", "F", "D", "D", "D", "D"],
    ["A", "A", "C", "C", "D", "D", "D", "D", "D"],
    ["A", "C", "C", "C", "B", "B", "D", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: turquoiseBlue,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
  solutionsCount: 1,
  createdBy: "Thauan Burn",
  creatorLink:
    "https://www.instagram.com/thauanschaves?igsh=MThxZnB0aGo2ZjNrbw==",
};

export default level;
