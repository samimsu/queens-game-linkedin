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
  path: "/community-level/477",
  size: 11,
  colorRegions: [
    ["D", "A", "A", "D", "D", "D", "D", "D", "D", "D", "E"],
    ["D", "B", "B", "B", "D", "D", "D", "D", "D", "F", "E"],
    ["D", "D", "C", "C", "C", "C", "D", "D", "D", "F", "E"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D", "F", "E"],
    ["D", "D", "D", "D", "D", "D", "D", "D", "D", "F", "D"],
    ["D", "H", "H", "H", "D", "G", "G", "G", "G", "F", "D"],
    ["D", "D", "H", "D", "D", "D", "D", "D", "G", "D", "D"],
    ["D", "D", "H", "D", "D", "D", "D", "D", "G", "D", "D"],
    ["J", "J", "H", "D", "D", "K", "K", "K", "G", "D", "D"],
    ["J", "J", "J", "I", "I", "I", "I", "K", "K", "D", "D"],
    ["J", "D", "J", "J", "J", "J", "J", "D", "K", "D", "D"],
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
  createdBy: "Emi S",
  creatorLink: "https://www.instagram.com/meyina009/",
};

export default level;
