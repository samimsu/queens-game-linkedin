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
  path: "/community-level/287",
  size: 11,
  colorRegions: [
    ["K", "I", "I", "I", "I", "I", "H", "E", "E", "B", "B"],
    ["K", "I", "I", "I", "H", "H", "H", "F", "E", "E", "B"],
    ["K", "I", "I", "H", "H", "H", "H", "F", "F", "E", "E"],
    ["K", "J", "I", "J", "J", "H", "F", "F", "F", "E", "E"],
    ["K", "J", "J", "J", "J", "H", "J", "F", "F", "E", "E"],
    ["K", "J", "J", "J", "J", "H", "J", "F", "E", "E", "E"],
    ["K", "J", "J", "J", "J", "J", "J", "F", "E", "C", "E"],
    ["K", "G", "G", "G", "G", "G", "G", "G", "C", "C", "C"],
    ["K", "A", "G", "G", "G", "G", "G", "G", "C", "C", "C"],
    ["K", "A", "A", "G", "G", "G", "G", "G", "D", "D", "D"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "K", "D"],
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
  solutionsCount: -1,
  createdBy: "Alexallos",
  creatorLink: "https://github.com/Alexallos",
};

export default level;
