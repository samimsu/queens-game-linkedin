import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  halfBaked,
  lightOrchid,
  lightWisteria,
  macNCheese,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/94",
  size: 9,
  colorRegions: [
    ["G", "G", "G", "F", "I", "F", "D", "D", "D"],
    ["G", "G", "F", "F", "I", "F", "F", "D", "D"],
    ["B", "F", "F", "C", "I", "C", "F", "F", "D"],
    ["B", "B", "F", "C", "I", "C", "C", "C", "E"],
    ["B", "B", "F", "F", "I", "F", "F", "E", "E"],
    ["B", "C", "C", "C", "I", "C", "F", "E", "E"],
    ["A", "F", "F", "C", "I", "C", "F", "F", "E"],
    ["A", "A", "F", "F", "I", "F", "F", "H", "H"],
    ["A", "A", "A", "F", "I", "F", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: lightOrchid,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: macNCheese,
    I: halfBaked,
  },
  solutionsCount: 76,
  createdBy: "Copole",
  creatorLink: "",
};

export default level;
