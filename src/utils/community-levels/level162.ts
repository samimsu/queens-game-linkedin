import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lavenderRose,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/162",
  size: 11,
  colorRegions: [
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "B", "B"],
    ["K", "K", "K", "K", "K", "A", "I", "I", "K", "K", "B"],
    ["K", "J", "J", "K", "K", "A", "A", "I", "I", "K", "K"],
    ["K", "J", "K", "K", "D", "D", "A", "A", "I", "K", "K"],
    ["J", "J", "K", "K", "D", "D", "C", "C", "K", "K", "K"],
    ["J", "E", "E", "D", "D", "C", "C", "K", "K", "K", "K"],
    ["J", "J", "E", "E", "K", "C", "K", "K", "G", "G", "K"],
    ["J", "J", "H", "E", "K", "K", "K", "G", "G", "G", "K"],
    ["J", "J", "H", "H", "F", "F", "K", "G", "K", "K", "K"],
    ["J", "J", "H", "H", "H", "F", "F", "K", "K", "K", "K"],
    ["J", "J", "J", "J", "J", "J", "K", "K", "K", "K", "K"],
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
    K: lavenderRose,
  },
  solutionsCount: 0,
  createdBy: "NameOfMe",
  creatorLink: "",
};

export default level;
