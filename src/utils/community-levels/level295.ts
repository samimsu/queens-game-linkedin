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
  path: "/community-level/295",
  size: 11,
  colorRegions: [
    ["B", "B", "B", "D", "D", "E", "B", "B", "B", "B", "A"],
    ["B", "D", "B", "D", "E", "E", "E", "B", "B", "B", "B"],
    ["B", "B", "B", "E", "F", "G", "F", "E", "B", "D", "B"],
    ["B", "B", "E", "E", "G", "H", "F", "E", "E", "B", "D"],
    ["B", "B", "B", "E", "F", "G", "F", "E", "B", "B", "B"],
    ["B", "D", "B", "B", "E", "E", "E", "B", "D", "B", "B"],
    ["D", "D", "B", "D", "B", "E", "B", "I", "B", "B", "B"],
    ["B", "J", "J", "J", "B", "I", "B", "I", "B", "B", "B"],
    ["C", "J", "H", "K", "I", "I", "I", "K", "J", "J", "C"],
    ["C", "K", "K", "K", "C", "I", "C", "K", "H", "J", "C"],
    ["C", "C", "I", "C", "C", "I", "C", "K", "K", "J", "I"],
  ],
  regionColors: {
    A: turquoiseBlue,
    B: anakiwa,
    C: halfBaked,
    D: altoMain,
    E: saharaSand,
    F: chardonnay,
    G: bittersweet,
    H: nomad,
    I: celadon,
    J: lightOrchid,
    K: lightWisteria,
  },
  solutionsCount: 1,
  createdBy: "Raelle",
  creatorLink: "",
};

export default level;
