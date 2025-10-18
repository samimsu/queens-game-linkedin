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
  path: "/community-level/307",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "F", "F", "F", "F", "F", "B", "B"],
    ["D", "D", "A", "F", "F", "B", "F", "F", "B", "B", "B"],
    ["D", "D", "A", "F", "B", "B", "B", "F", "B", "B", "B"],
    ["D", "A", "A", "F", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "J"],
    ["E", "E", "E", "E", "E", "B", "B", "B", "B", "J", "J"],
    ["C", "E", "E", "E", "C", "H", "B", "B", "B", "J", "K"],
    ["C", "C", "E", "E", "C", "H", "K", "B", "J", "J", "K"],
    ["C", "C", "C", "E", "C", "H", "K", "K", "K", "K", "K"],
    ["C", "G", "C", "C", "C", "H", "H", "H", "K", "I", "I"],
    ["C", "G", "G", "C", "C", "H", "H", "H", "K", "I", "I"],
  ],
  regionColors: {
    A: halfBaked,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: chardonnay,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: lightWisteria,
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "Monique",
  creatorLink: "https://www.instagram.com/edgarallanmo/",
};

export default level;
