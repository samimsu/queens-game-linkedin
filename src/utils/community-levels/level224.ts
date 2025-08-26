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
} from "../colors";

const level = {
  path: "/community-level/224",
  size: 10,
  colorRegions: [
    ["J", "J", "I", "I", "I", "E", "E", "E", "E", "E"],
    ["J", "J", "I", "I", "I", "I", "I", "E", "E", "F"],
    ["J", "J", "J", "J", "I", "I", "I", "I", "E", "F"],
    ["A", "A", "A", "A", "I", "G", "E", "I", "E", "D"],
    ["B", "A", "B", "A", "I", "G", "E", "E", "E", "D"],
    ["B", "B", "B", "G", "G", "G", "H", "E", "D", "D"],
    ["C", "C", "B", "G", "G", "H", "H", "D", "D", "D"],
    ["C", "B", "B", "D", "G", "H", "D", "D", "D", "D"],
    ["D", "B", "D", "D", "D", "D", "D", "D", "D", "D"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D", "D"],
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
  },
  solutionsCount: 1,
  createdBy: "Andrea",
  creatorLink: "",
};

export default level;
